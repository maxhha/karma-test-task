const r = require('rethinkdb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {validateRegistration, validateLogin} = require('./helpers');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull, GraphQLList} = require('graphql');

let connection = null;

r.connect({host: 'localhost', port: 28015}, (err, conn) => {
  if (err) throw err;
  connection = conn;
  r.db('test').tableCreate('users').run(conn, (err, result) => {});
  console.log(`RethinkDB started on port ${conn.port}`);
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {type: GraphQLString},
      username: {type: GraphQLString},
      password: {type: GraphQLString}
    })
  }
);

const TokenType = new GraphQLObjectType({
  name: 'Token',
  fields: () => ({
    token: {type: GraphQLString}
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    registerUser: {
      type: TokenType,
      args: {
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        confirmationPassword: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(root, {username, password, confirmationPassword}) {

        // 1. Простая валидация введённых данных
        const validationError = validateRegistration({username, password, confirmationPassword});
        if (validationError) {
          throw new Error(validationError);
        }
        // 2. Проверка существования пользователя с таким же username
        const cursor = await r.table('users').filter({username}).run(connection);
        let user = await cursor.toArray();
        user = user[0];

        if (user) {
          throw new Error('Такой пользователь уже существует.')
        }

        // 3. Шифруем пароль
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        // 4. Добавляем нового пользователя в базу данных
        const result = await r.table('users').insert({username, password}).run(connection);

        // 5. Создаём токен с именем нового пользователя
        const payload = {
          username
        };

        const token = jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600});

        return {token};
      }
    },

    loginUser: {
      type: TokenType,
      args: {
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
      },
      async resolve(root, {username, password}) {

        // 1. Простая валидация введённых данных
        const validationError = validateLogin({username, password});
        if (validationError) {
          throw new Error(validationError);
        }

        // 2. Поиск пользователя в базе данных
        const cursor = await r.table('users').filter({username}).run(connection);
        let user = await cursor.toArray();
        user = user[0];

        if (!user) throw new Error('Некорректные данные.');

        // 3. Проверка совпадения пароля с паролем в базе данных
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Некорректные данные.');

        // 4. Создаём токен с именем пользователя
        const payload = {
          username
        };

        const token = jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600});

        return {token};
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getCurrentUser: {
      type: UserType,
      async resolve(root, args, {currentUser}) {

        // из контекста берём имя текущего пользователя
        if (!currentUser) return null;

        // ищем его в базе данных
        const cursor = await r.table('users').filter({username: currentUser.username}).run(connection);
        let user = await cursor.toArray();
        user = user[0];

        if (!user) throw new Error('Некорректные данные');

        return user;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

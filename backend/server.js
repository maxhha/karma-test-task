const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const config = require('config');
const path = require('path');

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== 'null') {
    try {
      const currentUser = await jwt.verify(token, config.get('jwtSecret'));
      req.currentUser = currentUser;
    } catch (err) {
      // console.error(err);
    }
  }
  next();
});

app.use('/graphql', graphqlHTTP(req => {

  return {
    schema,
    graphiql: true,
    context: {
      currentUser: req.currentUser
    }
  }
}));



//
// app.get('*', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, 'client/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });

app.listen(4000, () => console.log('Server started on port 4000'));

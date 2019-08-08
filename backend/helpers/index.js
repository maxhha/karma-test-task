const validateRegistration = user => {
  const {username, password, confirmationPassword} = user;
  if (!username || !password || !confirmationPassword)
    return 'Все поля должны быть заполнены.';
  if (username.length < 3 || username.length > 20)
    return 'Поле username должно содержать не менее 3 и не более 20 символов.';
  if (password.length < 3)
    return 'Пароль должен содержать не менее 3 символов.';
  if (password !== confirmationPassword) {
    return 'Пароли не совпадают.';
  }
};

const validateLogin = user => {
  const {username, password} = user;
  if (!username || !password)
    return 'Все поля должны быть заполнены.';
};

module.exports = {
  validateRegistration,
  validateLogin
};

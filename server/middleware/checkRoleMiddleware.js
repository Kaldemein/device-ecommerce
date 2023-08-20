const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk
      if (!token) {
        return res.status(401).json({ message: 'Не авторизован' });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userPromise = User.findOne({ where: { id: decoded.id } })
      userPromise.then((user) => {
        if (user.role == role) {
          req.user = user
          next();
        } else {
          throw new Error('Роль не соотсветствует');
        }
      }).catch((_) => res.status(403).send({ message: 'Нет доступа' }));
    } catch (e) {
      res.status(401).json({ message: 'Не авторизован' });
    }
  };
};

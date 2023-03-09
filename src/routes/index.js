const router = require('express').Router();
const { ERROR_NOT_FOUND } = require('../utils/errors');

const routerUsers = require('./users');
const routerCard = require('./cards');

router.use('/users', routerUsers);
router.use('/cards', routerCard);
router.use('*', (req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: 'Страница не найдена' });
});

module.exports = router;
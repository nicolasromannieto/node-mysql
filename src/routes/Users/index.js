const usersRouter = require('express').Router();
const { createUserController } = require('../../controllers/Users')

usersRouter.post('/', createUserController);

module.exports = { usersRouter }
const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();


//controllers
const usersController = require('../controllers/users');

router.route('/')
    .get(usersController.index)
    .post(usersController.newUser)

//userId routes
router.route('/:userId')
    .get(usersController.getUser)
    .put(usersController.replaceUser)
    .patch(usersController.updateUser)


module.exports = router;

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/users', userController.postUser);

router.get('/users/all',userController.getAllUser);

router.get('/deleteuser/:id',userController.deleteUser);

module.exports = router;
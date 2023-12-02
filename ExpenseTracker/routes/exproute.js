const express = require('express');

const expController = require('../controllers/exp');

const router = express.Router();

router.post('/expense/:id', expController.editExp);
router.post('/expense', expController.postExp);

router.get('/expenses',expController.getAllExp);

router.get('/deleteexp/:id',expController.deleteExp);

module.exports = router;
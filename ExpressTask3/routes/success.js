const path=require('path');

const express=require('express');

const contactController=require('../controllers/contactus');
const router=express.Router();

router.post('/success',contactController.getSuccessPage);

module.exports = router;
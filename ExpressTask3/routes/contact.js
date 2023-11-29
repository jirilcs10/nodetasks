const path=require('path');

const express=require('express');

const contactController=require('../controllers/contactus');
const router=express.Router();

router.use('/contactus',contactController.getContactPage);

module.exports = router;
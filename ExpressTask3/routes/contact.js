const path=require('path');

const express=require('express');

const root=require('../util/path');
const router=express.Router();

router.use('/contactus',(req,res,next)=>{
    res.sendFile(path.join(root,'views','contact.html'));
});

module.exports = router;
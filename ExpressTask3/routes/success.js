const path=require('path');

const express=require('express');

const root=require('../util/path');
const router=express.Router();

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(root,'views','success.html'));
});

module.exports = router;
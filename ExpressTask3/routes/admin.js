const path=require('path');
const express=require('express');

const root=require('../util/path');
const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(root,'views','add-product.html'))
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop');
});

module.exports = router;
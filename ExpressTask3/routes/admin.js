const express=require('express');

const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    res.send("<form action='/admin/add-product' method='POST'><label for='title'>Product</label><input type='text' name='title'></input><br></br><label for='size'>Size</label><input type='number' name='size'></input><button type='submit'>Add Product</button></form>")
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop');
});

module.exports = router;
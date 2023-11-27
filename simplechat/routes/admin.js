const express=require('express');

const router=express.Router();


router.get('/login',(req,res,next)=>{
    res.send("<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/' method='GET'><label for='username'>Username:</label><input type='text' name='username' id='username'></input><br></br><button type='submit'>Login</button></form>")
});

module.exports = router;
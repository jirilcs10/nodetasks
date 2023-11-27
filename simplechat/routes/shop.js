const express=require('express');
const fs=require('fs');


const router=express.Router();


router.get('/',(req,res,next)=>{
    fs.readFile("./message.txt",(err,data="") =>{
        res.send(`<body><p>${data}</p><form action='/' onsubmit='document.getElementById("username").value=localStorage.getItem("username")' method='POST'><input type='text' name='message' id='message'></input><input type='hidden' name='username' id='username'></input><br></br><button type='submit'>Send</button></form></body`);
    })

})
router.post('/',(req,res,next)=>{
    fs.writeFile("./message.txt",`${req.body.username}: ${req.body.message} `,{flag:'a'},err =>{
       err?console.log(err):res.redirect('/');
    })

})

module.exports = router;
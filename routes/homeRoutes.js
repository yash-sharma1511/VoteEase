const express=require('express');
const router=express.Router();
const passport=require('passport')
const User=require('../models/userModel')

router.get("/",(req,res)=>{
    res.render("home");
})

router.get("/sign_up",(req,res)=>{
    res.render("sign_up");
})

router.post("/register", async(req, res)=>{
    const {username, email, password} = req.body;

    const user = new User({username, email});

    await User.register(user, password);

    res.redirect('/login');
})


router.get("/login",(req,res)=>{
    res.render("login");
})

router.post('/login', 
passport.authenticate('local', { failureRedirect: '/login' }),
(req, res) => {

  res.redirect('/dashboard');
});

router.get('/dashboard',(req,res)=>{
    res.render("dashboard");
})

router.get('/create_poll',(req,res)=>{
    res.render('create_poll');
})

module.exports=router;
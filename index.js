const express=require('express');
const dbConnect=require("./db/db.js")
const path=require("path");
const homeRouter=require("./routes/homeRoutes.js");
const User=require('./models/userModel.js');
// const { connect } = require('http2');
// const flash=require('connect-flash');
const passport=require('passport');
const session=require('express-session');
const app=express();
const LocalStrategy=require('passport-local');
const methodOverride=require('method-override');

port=4000;

dbConnect();

app.set("view engine","ejs")
app.set("views" ,"views")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
      httpOnly:true,
      maxAge: 7 * 24 * 60 * 60 * 1000 * 1
    }
  }))


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(homeRouter);

app.listen(port,()=>{
    console.log(`port is running at ${port}`);

})
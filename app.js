const express = require('express')
const app = express()
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const nodemon = require('nodemon')
const bodyParser = require('body-parser')
const chalk = require('chalk')
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const connectEnsureLogin = require('connect-ensure-login');
const indexRouter = require('./routes/indexRouter')
// const Employee = require('./models/supervisorRegModel')


mongoose.connect('mongodb://localhost:27017/RTCKampalaCity',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log(chalk.bgBlack('RTC Kampala City database is Live'));  
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static('public'))

// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));

/*  MIDDLEWARE SETUP : PASSPORT */
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(Employee.createStrategy());
// passport.serializeUser(Employee.serializeUser());
// passport.deserializeUser(Employee.deserializeUser());

app.use('/', indexRouter)

app.get('*',(req,res)=>{
    res.send('Error')
})

app.listen(4000,()=>{
    console.log(chalk.greenBright('Citeh listening on port 4000'));
    
})
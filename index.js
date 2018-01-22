//require modules
require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express();


//set up middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));
app.use(session({    
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();  
  next();
});


//home page route
app.get('/', function(req, res){
  res.render('home');
});


//profile page
app.get('/profile', isLoggedIn, function(req, res){
  res.render('profile');
});

//controllers
app.use('/auth', require('./controllers/auth'));
app.use('/favorites', require('./controllers/favorites'));
app.use('/notebooks', require('./controllers/notebooks'));
app.use('/tags', require('./controllers/tags'));


app.listen(process.env.PORT || 3000);



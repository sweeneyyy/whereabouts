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
app.use(session({    // session must be above passport and flash
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.currentUser = req.user;  // currentUser is a variable, can be defined differently
  res.locals.alerts = req.flash();  // alert is a variable, can be defined differently
  next();
});

//stub out home page route
app.get('/', function(req, res){
  // res.send('home page coming soon');
  res.render('home');
});


// app.get('/', function(req, res){
// //   // request('http://www.google.com', function(error, response, body){
// //   // if( !error && response.statusCode == 200){
// //   //   res.send(body);
// //   //   }
// //   // });

//   var qs = {
//     q: 'van life',
//     key: process.env.API_KEY,
//     cx: '016375955783160959795:tc5heqhcbrg',
//     imgType: 'photo',
//     searchType: 'image'
//   }

//   request({
//     url: 'https://www.googleapis.com/customsearch/v1?',
//     qs: qs 
//   }, function(error, response, body){
//     if(!error && response.statusCode == 200){
//       var dataObj = JSON.parse(body);
//       res.send(dataObj);
//       // res.render("results", {results:dataObj.Search});
//     }
//   });

// });



// route for profile page
app.get('/profile', isLoggedIn, function(req, res){
  res.render('profile');
});

//inlcude controllers
app.use('/auth', require('./controllers/auth'));
app.use('/favorites', require('./controllers/favorites'));
app.use('/notebooks', require('./controllers/notebooks'));
app.use('/tags', require('./controllers/tags'));


app.listen(process.env.PORT || 3000);



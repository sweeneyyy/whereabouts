var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// GET - login route
router.get('/login', function(req, res){
  res.render('auth/login');
});
// POST - login route
// router.post('/login', function(req, res){
//   console.log('req.body is', req.body);
//   res.send('login post route - coming soon');
// });

router.post('login', passport.authenticate('local', {
  successRedirect: '/profile', 
  successFlash: 'Login Successful!',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid credentials'
}));


// GET - signup route
router.get('/signup', function(req, res){
  res.render('auth/signup');
});

// POST - signup route
router.post('/signup', function(req, res, next){
  console.log('req.body is', req.body);
  // res.send('signup post route coming soon')
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    }
  }).spread(function(user, wasCreated){
    if(wasCreated){
      //Good job, you didn't try to make a duplicate!
      passport.authenticate('local', {
        successRedirect: '/profile',
        successFlash: 'Succesfully logged in'
      })(req, res, next);
    }
    else{
      //Bad job, you tried to sign up when you should login
      req.flash('error', 'Email already exists');
      res.redirect('/auth/login');
    }
  }).catch(function(err){
    req.flash('error', err.message);
    res.redirect('/auth/signup');
  });
});

// GET -logout route
router.get('/logout', function(req, res){
  // res.send('logout route coming soon!');
  req.logout();
  req.flash('success', 'Succesfully logged out');
  res.redirect('/');
});



module.exports = router;
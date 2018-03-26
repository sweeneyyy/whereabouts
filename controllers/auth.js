var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// GET - login route
router.get('/login', function(req, res){
  res.render('auth/login');
});

// POST - login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/', 
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
      //no duplicate attempted
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'Succesfully logged in'
      })(req, res, next);
    }
    else{
      //already signed up, need to login instead
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
  req.logout();
  req.flash('success', 'Succesfully logged out');
  res.redirect('/');
});

module.exports = router;
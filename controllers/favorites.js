var express = require('express');
var request = require('request');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/passportConfig');
var session = require('express-session');
var tumblr = require('tumblr.js');
var router = express.Router();


//GET - display all favorite images page
router.get('/', function(req, res){
  db.favorite.findAll().then(function(favoriteFromDB){
    res.render('favorites/all', {favoriteOnFrontEnd: favoriteFromDB});
  });
});

//GET - api call to pull in images to view and save as favorites

// Authenticate via API Key
router.get('/search', function(req, res){
  
  var client = tumblr.createClient({ 
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.API_KEY,
    tag: 'vanlife',
    limit: 12
  });

 // Make the request
// client.tagged('van life', { limit: 12 }, function (err, data) {


  request({
    url: 'https://api.tumblr.com/v2/tagged?',
    client: client
  }, function(error, response, body){
    if(!error && response.statusCode == 200){
      var dataObj = JSON.parse(body);
      res.send(dataObj);
      // res.render('favorites/search', {results:dataObj.items});
    }
  });


});



//POST - add new image to favorites
router.post('/', isLoggedIn, function(req, res){
  db.favorite.create({
    userId: req.user.id,
    url: req.body.url
  }).then(function(createdFav){
     res.redirect('/favorites');
  }).catch(function(err){
    console.log("Uh oh error", err);
    res.send('Fail!');
  });
});

//DELETE - remove an image from favorites
router.delete('/:id', isLoggedIn, function(req, res){
  console.log('delete route ID = ', req.params.id);
  db.favorite.destroy({
    where: { id: req.params.id }
  }).then(function(deleted){
    console.log('Deleted = ', deleted);
    res.send('success');
  }).catch(function(err){
    console.log('An error happened', err);
    res.send('fail');
  });
});

//GET - display single favorite and associated tags
router.get('/:id', isLoggedIn, function(req, res){
  db.favorite.findOne({
    where: { id: req.params.id },
    include: [db.user]
  }).then(function(favoriteFromDB){
    res.render('favorites/single', { favoriteOnFrontEnd: favoriteFromDB });
  });
});






module.exports = router;
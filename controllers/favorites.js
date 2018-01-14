var express = require('express');
var request = require('request');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/passportConfig');
var session = require('express-session');
var tumblr = require('tumblr.js');
var client = tumblr.createClient({ consumer_key: process.env.CONSUMER_KEY }); // Authenticate via API Key
var router = express.Router();


//GET - display all favorite images page
router.get('/', function(req, res){
  db.favorite.findAll().then(function(favoriteFromDB){
    res.render('favorites/all', { favoriteOnFrontEnd: favoriteFromDB });
  });
});


router.get('/search', function(req, res){
  var results = [];

  res.render('favorites/search', {results: results});
});

// POST - api call to pull in images from user query to view/save as favorite
router.post('/search', function(req, res){

  client.taggedPosts(req.body.searchTag, { feature_type: 'everything', before: 1423937583 }, function (err, data) {
    
    console.log(data[3].timestamp);
    res.send(data);
 

    // var beforeTimeStamp = [];

    //   data.forEach(function(item){
    //     if(item.timestamp)
    // })

  // var beforeTimeStamp = data[data.length - 1].timestamp;

  // in the options for api call above check to see if front end is sending a `before` key in the body
  // if they are then add that before timestamp, if not then get the first group of photos


  var urlList = [];

     data.forEach(function(item){
       if(item.photos){
         if(item.photos[0].original_size){
           urlList.push(item.photos[0].original_size.url);
         } else if(item.photos[0].alt_sizes) {
           urlList.push(item.photos[0].alt_sizes[0].url);
         }
       }
     })
 
    // res.render('favorites/search', {results: urlList});
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
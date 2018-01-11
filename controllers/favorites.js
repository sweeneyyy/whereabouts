var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();


//GET - display all favorite images page
router.get('/', function(req, res){
  db.favorite.findAll().then(function(favorite){
    res.render('favorites/all', {favorite: favorite});
    console.log(favorite.id);
  });
});


//GET - api call to pull in images to view and save as favorites
router.get('/search', function(req, res){

  var qs = {
    q: 'van life',
    key: process.env.API_KEY,
    cx: '016375955783160959795:tc5heqhcbrg',
    imgType: 'photo',
    imgSize: 'medium',
    searchType: 'image'
  }

  request({
    url: 'https://www.googleapis.com/customsearch/v1?',
    qs: qs 
  }, function(error, response, body){
    if(!error && response.statusCode == 200){
      var dataObj = JSON.parse(body);
      // res.send(dataObj);
      res.render('favorites/search', {results:dataObj.items});
    }
  });

});


//POST - add new image to favorites
router.post('/', function(req, res){
  // res.send('add to favorites route coming soon');
  //TO DO add fav image to db
  // var favorite = { userId: req.user };
  // console.log('favorite ', favorite);

  db.favorite.create(req.body).then(function(createdFavorite){
    include: [db.user]
    //redirect to favorites page
    res.redirect('/favorites');
    //catch to display any error messages
  }).catch(function(err){
    console.log("Uh oh error", err);
    res.send('Fail!');
  });
});


//GET - display single favorite and associated tags
router.get('/:id', function(req, res){
  res.render('favorites/single');
});

//DELETE - remove an image from favorites
router.delete('/:id', function(req, res){
  console.log('Delete route ID = ', req.params.id);
  res.send('delete from favorites route coming soon');
});




module.exports = router;
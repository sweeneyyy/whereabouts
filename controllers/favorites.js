var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();


//GET - display all favorite images page
router.get('/', function(req, res){
  res.render('favorites/all')
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


//GET - display single favorite and associated tags
router.get('/:id', function(req, res){
  res.render('favorites/single');
});


//POST - add new image to favorites
router.post('/', function(req, res){
  res.send('add to favorites route coming soon');
  //TO DO add fav image to db
  //redirect to favorites page

  //catch to display any error messages
});


//DELETE - remove an image from favorites
router.delete('/:id', function(req, res){
  console.log('Delete route ID = ', req.params.id);
  res.send('delete from favorites route coming soon');
});




module.exports = router;
var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all favorite images page
router.get('/all', function(req, res){
  res.render('favorites/all')
});




//GET - display single favorite and associated tags
router.get('/:id', function(req, res){
  res.render('favorites/single');
});




//POST - add new image to favorites
router.post('/', function(req, res){
  res.send('add to favorites route coming soon');
});




//DELETE - remove an image from favorites
router.delete('/', function(req, res){
  res.send('delete from favorites route coming soon');
});





module.exports = router;
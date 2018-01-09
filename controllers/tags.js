var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all tags
router.get('/all', function(req, res){
  res.render('tags/all');
});




//GET - display single tag with associated images
router.get('/:id', function(req, res){
  res.render('tags/single');
});




//POST - add new tag
router.post('/', function(req, res){


});



//DELETE - remove a tag








module.exports = router;
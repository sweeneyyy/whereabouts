var express = require('express');
var db = require('../models');
var router = express.Router();

//TODO - implement tag routes

//GET - display all tags
router.get('/', function(req, res){
  res.render('tags/all');
});


//POST - add new tag
router.post('/', function(req, res){
  res.send('add new tag route coming soon');
});


//GET - display single tag with associated images
router.get('/:id', function(req, res){
  res.render('tags/single');
});


//DELETE - remove a tag
router.delete('/:id', function(req, res){
  console.log('Delete route ID = ', req.params.id);
  res.send('delete tag route coming soon');
});


module.exports = router;
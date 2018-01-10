var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all notebooks page
router.get('/', function(req, res){
  res.render('notebooks/all');
});


//GET - form to add new notebook
router.get('/new', function(req, res){
  res.render('notebooks/new');
});


//GET - display single notebook
router.get('/:id', function(req, res){
  res.render('notebooks/single');
});


//DELETE - remove a notebook
router.delete('/:id', function(req, res){
  console.log('delete route ID = ', req.params.id);
  res.send('delete notebook route coming soon');
});



//PUT - edit notebook name and/or content
router.put('/:id', function(req, res){
  res.send('edit notebook route coming soon');
});



module.exports = router;
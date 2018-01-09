var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all notebooks page
router.get('/all', function(req, res){
  res.render('notebooks/all');
});




//GET - display single notebook
router.get('/:id', function(req, res){
  res.render('notebooks/single');
});




//Get - form to add new notebook
router.get('/new', function(req, res){
  res.send('new notebook form coming soon');
});




//DELETE - remove a notebook





//PUT - edit notebook name and/or content





module.exports = router;
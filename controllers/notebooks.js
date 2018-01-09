var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all notebooks page
router.get('/all', function(req, res){
  res.render('notebooks/all');
});




//GET - display single notebook





//POST - add new notebook





//DELETE - remove a notebook





//PUT - edit notebook name and/or content






module.exports = router;
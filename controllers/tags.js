var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all tags
router.get('/all', function(req, res){
  res.render('tags/all');
});




//GET - display single tag with associated images





//POST - add new tag






//DELETE - remove a tag








module.exports = router;
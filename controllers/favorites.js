var express = require('express');
var db = require('../models');
var router = express.Router();


//GET - display all favorite images page
router.get('/all', function(req, res){
  res.render('favorites/all')
});




//GET - display single favorite and associated tags





//POST - add new image to favorites





//DELETE - remove an image from favorites






module.exports = router;
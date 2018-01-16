var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();


//GET - display all notebooks page
router.get('/', isLoggedIn, function(req, res){
  db.notebook.findAll().then(function(notebookFromDB){
    res.render('notebooks/all', {notebookOnFrontEnd: notebookFromDB});
  });
});

//GET - form to add new notebook
router.get('/new', isLoggedIn, function(req, res){
  res.render('notebooks/new');
});

//POST - create new notebook
router.post('/', isLoggedIn, function(req,res){
  db.notebook.create({
    userId: req.user.id,
    title: req.body.title,
    content: req.body.content
  }).then(function(createdNotebook){
    res.redirect('/notebooks');
  }).catch(function(err){
    console.log("Uh oh error", err);
    res.send('Fail!');
  });
});

//DELETE - remove a notebook
router.delete('/:id', isLoggedIn, function(req, res){
  console.log('delete route ID = ', req.params.id);
  db.notebook.destroy({
    where: { id: req.params.id }
  }).then(function(deleted){
    console.log('deleted = ', deleted);
    res.send('success');
  }).catch(function(err){
    console.log('An error happened', err);
    res.send('fail');
  });
});

//GET - display single notebook
router.get('/:id', isLoggedIn, function(req, res){
  db.notebook.findOne({
    where: { id: req.params.id },
    include: [db.user]
  }).then(function(notebookFromDB){
    res.render('notebooks/single', { notebookOnFrontEnd: notebookFromDB });
  });
});


//GET - edit notebook page
router.get('/edit/:id', isLoggedIn, function(req, res){
  //TODO prepopulate notebook title and content
  db.notebook.findOne({
    where: { id: req.params.id },
    include: [db.user]
  }).then(function(notebookFromDB){
    res.render('notebooks/edit', { notebookOnFrontEnd: notebookFromDB });
  });
});

//PUT - edit notebook name and/or content
router.put('/edit/:id', isLoggedIn, function(req, res){
  console.log('put route ID = ', req.params.id);
  db.notebook.findOne({
    where: { id: req.body.id }
  }).then(function(notebook){
    notebook.title = req.body.title;
    notebook.content = req.body.content;
    notebook.save();
  }).then(function(updatedNotebook){
    res.send('notebook updated');
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;




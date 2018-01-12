$(document).ready(function() {

console.log('hello from routing.js!');

//delete a notebook
$('.delete-notebook').click(function(e){
  e.preventDefault();

  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'

  }).done(function(data){
    window.location.href = '/notebooks';
  });
});


//delete a favorite 
$('.delete-favorite').click(function(e){
  e.preventDefault();

  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'

  }).done(function(data){
    window.location.href = '/favorites';
  });
});


});
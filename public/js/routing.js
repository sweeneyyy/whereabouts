$(document).ready(function() {

console.log('hello from routing.js!');

//DELETE a notebook
$('.delete-notebook').click(function(e){
  e.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'DELETE'
    //if return successfully
    }).done(function(data){
      window.location.href = '/notebooks';
    });
});

//EDIT a notebook
$('.edit-form').click(function(e){
  e.preventDefault();
    $.ajax({
      method: 'PUT',
      url: $(this).attr('action'),
      // pass data in form of an object
      data: {
        title: $('#newTitle').val(),
        content: $('#notebookContent').val()
      }
      //if return successfully
    }).success(function(data){
      console.log('got to the promise!');
      window.location.href = '/notebooks/all';
    });// End AJAX
});// End submit handler


//DELETE a favorite 
$('.delete-favorite').click(function(e){
  e.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'DELETE'
      //if return successfully
    }).done(function(data){
      window.location.href = '/favorites';
    });
});


});//end document ready
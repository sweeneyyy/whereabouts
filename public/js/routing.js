$(document).ready(function() {

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
      url: $(this).attr('action'),
      method: 'PUT',
      data: {
        title: $('#newTitle').val(),
        content: $('#notebookContent').val()
      }
      //if return successfully
    }).done(function(data){
      console.log('got to the promise!');
      window.location.href = '/notebooks';
    });
});


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


});
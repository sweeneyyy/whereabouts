module.exports = function(req, res, next){
  //if no user logged in
  if(!req.user){
    req.flash('error', 'You must be logged in to view this page');
    res.redirect('/auth/login');
  }
  else {
    next();
  }
}

/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = function(req,res){
	new User({
		email : req.body.email,
		password : req.body.password
	}).save(function(err, user, count){
		res.redirect('/');
	})
}

exports.list = function(req, res){
  User.find(function(err, users, count){
  	res.render('index',{
  		title: 'View all users',
  		users: users
  	});
  });
}
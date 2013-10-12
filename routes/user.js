
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
  res.send("respond with a resource");
};
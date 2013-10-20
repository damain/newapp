
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = function(req,res){
		
	var newUser = new User({
							email : req.body.email,
							password : req.body.password
							});

	newUser.save(function(err, user, count){
		if(err){
			console.log("error seen here");
			res.json(false);
		}else{
			res.json(true);	
		}
	
	});

	

}

exports.list = function(req, res){
  User.find(function(err, users, count){
  	res.render('index',{
  		title: 'View all users',
  		users: users
  	});
  });
}


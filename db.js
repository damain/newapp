var mongoose = require('mongoose'),
	bcrypt = require('bcrypt');
 	Schema = mongoose.Schema;

var User = new Schema({
	email: String,
	password: String,
	active: Boolean,
	fname: String,
	lname: String

});

User.pre('save',function(next){
	var user = this;
	console.log(user.password);
	if (!user.isModified('password')){return next();}

	bcrypt.hash(user.password, 10, function(err, hash){

		if(err){
			console.log('in error: '+user.password);
			console.log('error in pre is : '+err);
			return next(err);}
		user.password = hash;
		next();
	})


});

mongoose.model('User', User);
mongoose.connect("mongodb://xalon:proto1@ds049888.mongolab.com:49888/xalon");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	email: String,
	password: String,
	active: Boolean,
	fname: String,
	lname: String

});

mongoose.model('User', User);
mongoose.connect("mongodb://xalon:proto1@ds049888.mongolab.com:49888/xalon");
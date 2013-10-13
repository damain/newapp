var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.users = function(req, res){
  User.find(function(err, users, count){
  	res.send(users);
  });
}
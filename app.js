
/**
 * Module dependencies.
 */

var express = require('express');

require('./db.js')

var routes = require('./routes');
var user = require('./routes/user');
var api = require('./routes/api');
var http = require('http');
var path = require('path');



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/api/users', api.users);
app.post('/api/users',user.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

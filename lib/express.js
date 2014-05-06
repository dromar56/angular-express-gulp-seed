var express		= require('express');
var morgan		= require('morgan'); //previously logger middleware
var methodOverride	= require('method-override');
var bodyParser		= require('body-parser');
var path		= require("path");


var app = module.exports = express();

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/bower_components', express.static(path.join(__dirname, '..', 'bower_components')));

app.get('/', function(req, res){
  res.render('index', {title: "Angular Express Gulp Seed"});
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

// app.get('*', routes.index);

app.listen(app.get('port'));

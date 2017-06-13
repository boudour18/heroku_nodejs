var express = require('express');
var app = express();

var port = process.env.PORT || 8080 

app.use(express.static(__dirname + "/public"));

//app.use(express.static(__dirname + "/views"));
//app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
}).get('/test', function(req, res){
	res.send('good job ;)');
})

app.use(function(req, res){
	res.setHeader('Content-Type','text/plain');
	res.status(404).send('Page not FOUND...');
})

app.listen(port, function(){
	console.log('app running');
})

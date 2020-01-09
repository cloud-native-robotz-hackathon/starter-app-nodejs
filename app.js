
var async = require('async');
var tasks = require('./run.js').tasks;
var api = require('./api.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/// Global Variables
apiKey = "<robot name>"; // Change to the name of your robot / 3Scale token   
url = "https://api-2445582274375.staging.gw.apicast.io:443/api/robot"; // URL from 3Scale without / at the end

/***************************************
// execute tasks
****************************************/
app.get('/run', function(req,res){
	async.waterfall(tasks, function(err,results){
		if(err){
			console.error('Error running your code',err);
			res.json({status:'Error: '+ err});
		} else {
			console.log('Executed your code successfully');
			res.json({status:'ok'});
		}
	})
})

app.engine('html', require('ejs').renderFile);
// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static('public'))


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
  res.render('index.ejs', {
  	api : api,
  	apiKey: apiKey,
  	url: url
  });
});

app.get('/forward/:length', function(req,res){
	var length = req.params.length
	api.forward(length,function(){
		res.json({status:"ok"});
	})
});
app.get('/backward/:length', function(req,res){
	var length = req.params.length
	api.backward(length,function(){
		res.json({status:"ok"});
	})
});
app.get('/turnLeft/:degrees', function(req,res){
	var degrees = req.params.degrees
	api.turnLeft(degrees,function(){
		res.json({status:"ok"});
	})
});
app.get('/turnRight/:degrees', function(req,res){
	var degrees = req.params.degrees
	api.turnRight(degrees,function(){
		res.json({status:"ok"});
	})
});
app.get('/getDistance', function(req,res){
	api.getDistance(function(err,data){
		res.json({distance:data});
	})
});

app.get('/sim', function(req,res){
	
})

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
module.exports = app ;

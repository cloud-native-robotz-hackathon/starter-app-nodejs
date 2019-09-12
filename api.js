var request = require('request');
exports.request = request;

exports.getPower = function(cb) {
  request(url + '/power?user_key='+ apiKey,function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.getDistance = function(cb) {
  request(url + '/distance?user_key='+ apiKey,function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.getStatus = function(cb) {
  request(url + '/status?user_key='+ apiKey,function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.getRemoteStatus = function(cb) {
  request(url + '/remote_status?user_key='+ apiKey,function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.forward = function forward(length, cb) {
  console.log(url + '/forward/' + length + '?user_key='+ apiKey);
  request(url + '/forward/' + length + '?user_key='+ apiKey,{method:"POST"},function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      console.error(response.body);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.backward = function(length, cb) {
  request(url + '/backward/' + length + '?user_key='+ apiKey,{method:"POST"},function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.turnRight = function(degrees, cb) {
  request(url + '/right/' + degrees + '?user_key='+ apiKey,{method:"POST"},function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.turnLeft = function(degrees, cb) {
  request(url + '/left/' + degrees + '?user_key='+ apiKey,{method:"POST"},function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

exports.head = function(degrees, cb) {
  request(url + '/servo/' + degrees + '?user_key='+ apiKey,{method:"POST"},function(err,response,body){
    if(err){
      console.error('Network Error',err);
      cb(err);
    } else if(!response || response.statusCode > 299){
      console.error('HTTP error',response.statusCode);
      cb(response.statusCode);
    } else {
      cb(null,body)
    }
  });
}

this.forward = exports.forward;
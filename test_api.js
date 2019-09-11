
module.exports = {
	forward:function(length,cb){
		console.log('FOREWARD');
		return cb(null,length);
	},
	backward:function(length,cb){
		console.log('BACK');
		return cb(null,length);
	},
	turnLeft:function(degrees, cb){
		console.log('turnLeft',degrees);
		return cb(null,degrees);
	},
	turnRight:function(degrees, cb){
		console.log('turnRight',degrees);
		return cb(null,degrees);
	},
	getDistance:function(cb){
		console.log('getDistance = 10');
		return cb(null,10);
	}
}
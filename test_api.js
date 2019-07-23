
module.exports = {
	forward:function (length,cb){
		console.log('FOREWARD');
		return cb(null,length);
	},
	backward:function(length,cb){
		console.log('BACK');
		return cb(null,length);
	},
	getDistance:function(cb){
		console.log('getDistance = 10');
		return cb(null,10);
	}
}
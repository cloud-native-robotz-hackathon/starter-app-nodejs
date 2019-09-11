var api = require('./api.js');

// Commands:
// Show power in volt              : getPower();
// Show distance in mm             : getDistance();
// Show status                     : getStatus();
// Show remote_status              : getRemoteStatus();
// Go forward in cm                : forward("length in cm");
// Go backward in cm               : backward("length in cm");
// Turn left in degrees            : turnLeft("degrees");
// Turn right in degrees           : turnRight("degrees");
// Turn head between 0-180 degrees : head("0-180 degrees");

/*****************************************
// Start coding here

Your code will be executed in a waterfall fashion
so that you can response to status updates from the robot.
This will allow you to read distance and adjust your behaviour accordingly

Below are an example 3 steps, forward, backward, getDistance.
Use this example to build your
******************************************/

exports.tasks = [
	// your code

	function(cb){
		api.forward(5,cb)
	},
	function(arg1,cb){
		api.getDistance(cb)
	},
	function(distance,cb){
		if(distance > 5){
			api.forward(5,cb)
		} else {
			return cb('End!');
		}
	}

	//end of your code
];
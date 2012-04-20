function Cloud(speed) {
	var _speed = speed ? speed : 0;
	var _stopped = false;

	var self = Ti.UI.createImageView({
		image:'/images/cloud.png',
		left:0,
		top:0,
		width:287,
		height:208
	});

	self.speed = function() {
		return _speed;
	}

	self.changeSpeed = function(speed) {
		if (Math.abs(speed) <= 100) {
			_speed = speed;
		}
	}

	self.simulateNextStep = function() {
		if (!_stopped) {
			self.left = self.left + _speed;
		}
	}
	
	self.addEventListener('click', function() {
		_stopped = !_stopped;
	});
	
	return self;
}

module.exports = Cloud;

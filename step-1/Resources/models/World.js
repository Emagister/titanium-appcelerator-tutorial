var Cloud = require('/models/Cloud');

function World(width, height) {
	var _width = width;
	var _height = height;
	var _clouds = [];
	var n = 0;

	var self = Ti.UI.createImageView({
		backgroundColor: '#00c0e0',
		width: _width,
		height: _height
	});

	self.simulateNextStep = function() {
		for (var i = 0; i < n; i++) {
			_clouds[i].simulateNextStep();
			
			if (_clouds[i].speed() < 0) {
				if ((_clouds[i].left + _clouds[i].width) < 0) {
					_clouds[i].left = _width;
				}
			} else {
				if (_clouds[i].left > _width) {
					_clouds[i].left = -_clouds[i].width;
				}
			}
		}		
	}

	self.addCloud = function(cloud) {
		_clouds.push(cloud);
		self.add(_clouds[n++]);
	}
	
	self.changeWidth = function(width) {
		_width = width;
	}
	
	self.changeHeight = function(height) {
		_height = height;
	}

	return self;
}

module.exports = World;

function ApplicationWindow() {
	var World = require('models/World');
	var Cloud = require('models/Cloud');
		
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	var world = new World(768, 1024);
	self.add(world);

	var cloud = null;
	for(var i=1; i<10; i++) {
		cloud = new Cloud(10 * Math.random() - 5);
		cloud.left = Math.random() * 768;
		cloud.top = Math.random() * 1024;
		world.addCloud(cloud);
	}

	setInterval(function() {
		world.simulateNextStep();
	}, 50);
	
	return self;
}

module.exports = ApplicationWindow;

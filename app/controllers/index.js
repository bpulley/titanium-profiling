
// Proxy creation - Sequential Sets
function createViews(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){
		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView();

			newView.top = 5;
			newView.height = 40;
			newView.width = Ti.UI.FILL;
			newView.left = 5;
			newView.right = 5;
			newView.backgroundColor = 'red';

			theWindow.add(newView);
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('added 1000 views w/o/ creation dict in ' + delta + 'ms');
	});

	theWindow.open();
}



// Proxy creation - Creation dict

function createViewsWithDict(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){
		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('added 1000 views w/ creation dict in ' + delta + 'ms');
	});

	theWindow.open();
}

// Proxy update - Sequential Sets

function updateViews(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){
		

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top             : 5,
				height          : 40,
				width           : Ti.UI.FILL,
				left            : 5,
				right           : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var children = theWindow.children;

		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			children[ii].height          = 80;
			children[ii].backgroundColor = 'blue';
			children[ii].left            = 10;
			children[ii].right           = 10;
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('updated 1000 views sequentially in ' + delta + 'ms');
	});

	theWindow.open();
}

function updateViewsApplyProperties(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){
		

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top             : 5,
				height          : 40,
				width           : Ti.UI.FILL,
				left            : 5,
				right           : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var children = theWindow.children;

		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			children[ii].applyProperties({
				height          : 80,
				backgroundColor : 'blue',
				left            : 10,
				right           : 10
			});
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('updated 1000 views via applyProperties in ' + delta + 'ms');
	});

	theWindow.open();
}



// Proxy creation - Creation dict

function createViewsWithDict(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){
		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('added 1000 views w/ creation dict in ' + delta + 'ms');
	});

	theWindow.open();
}



// Table population - sequential
function populateTableViewSequential(){
	var theWindow = Ti.UI.createWindow();

	var theTable = Ti.UI.createTableView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});

	theWindow.add(theTable);

	theWindow.addEventListener('open', function(){
		var startTime = new Date();

		for(var ii = 0; ii < 1000; ++ii){
			var newRow = Ti.UI.createTableViewRow({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			theTable.appendRow(newRow);
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('added 1000 rows sequentially in ' + delta + 'ms');
	});

	theWindow.open();
}

// Table population - bulk
function populateTableViewEnMasse(){
	var theWindow = Ti.UI.createWindow();

	var theTable = Ti.UI.createTableView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});

	theWindow.add(theTable);

	theWindow.addEventListener('open', function(){
		var startTime = new Date();

		var tableData = [];
		for(var ii = 0; ii < 1000; ++ii){
			var newRow = Ti.UI.createTableViewRow({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			tableData.push(newRow);
		}

		theTable.setData(tableData);

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('added 1000 rows en masse in ' + delta + 'ms');
	});

	theWindow.open();
}


// View removal - sequential

function removeViews(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var startTime = new Date();

		var children = theWindow.children;

		for(var ii = 0, numChildren = children.length; ii < numChildren; ++ii){
			theWindow.remove(children[ii]);
		}

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('removed 1000 views in ' + delta + 'ms');
	});

	theWindow.open();
}

// View removal - bulk

function removeViewsEnMasse(){
	var theWindow = Ti.UI.createWindow({
		layout : 'vertical'
	});

	theWindow.addEventListener('open', function(){

		for(var ii = 0; ii < 1000; ++ii){
			var newView = Ti.UI.createView({
				top : 5,
				height : 40,
				width : Ti.UI.FILL,
				left : 5,
				right : 5,
				backgroundColor : 'red'
			});

			theWindow.add(newView);
		}

		var startTime = new Date();

		theWindow.removeAllChildren();

		var endTime = new Date();
		var delta = endTime - startTime;

		theWindow.close();

		alert('removed 1000 views en masse in ' + delta + 'ms');
	});

	theWindow.open();
}

//Events - Ti.App events

function eventFiringTitanium(){
	var startTime;

	var handledCount = 0;

	function testListener(){
		handledCount++;

		if(handledCount === 10000){
			var endTime = new Date();
			var delta = endTime - startTime;

			alert('fired 10000 Ti.APP events in ' + delta + 'ms');

			Ti.App.removeEventListener('testEvent', testListener);
		}
	}

	Ti.App.addEventListener('testEvent', testListener);

	startTime = new Date();

	for(var ii = 0; ii < 10000; ++ii){
		Ti.App.fireEvent('testEvent');
	}
}

//Events - Backbone
function eventFiringBackbone(){
	var startTime;

	//since events fire asynchronously, we need to keep track of how many were handled.
	var handledCount = 0;
	var eventingObj = _.extend({}, Backbone.Events);

	eventingObj.on('testEvent', function(){
		handledCount++;

		if(handledCount === 10000){
			var endTime = new Date();
			var delta = endTime - startTime;

			alert('fired 10000 Backbone events in ' + delta + 'ms');
		}
	});

	startTime = new Date();

	for(var ii = 0; ii < 10000; ++ii){
		eventingObj.trigger('testEvent');
	}
}

$.index.open();



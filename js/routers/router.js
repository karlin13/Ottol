var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},
    initialize: function(){
    },
		setFilter: function (param) {
			app.Filter = param || '';
		}
	});

	app.OttolRouter = new TodoRouter();
	Backbone.history.start();
})();

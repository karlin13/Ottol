'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: "../node_modules/jquery/dist/jquery",
		underscore: "../node_modules/underscore/underscore",
		backbone: "../node_modules/backbone/backbone",
		localStorage: "../node_modules/backbone.localstorage/backbone.localStorage",
		text: '../node_modules/requirejs-text/text'
	}
});

require([
	'backbone',
	'views/app.view',
	'routers/router',
	'common'
], function(Backbone, AppView, WorkSpace, Common){
	Common.Router = new WorkSpace();
	Backbone.history.start();

	new AppView();
});

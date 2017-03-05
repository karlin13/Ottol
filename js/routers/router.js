define([
	'backbone',
	'common'
], function(Backbone, Common){
	return Backbone.Router.extend({
			routes: {
				'*filter': 'setFilter'
			},
	    initialize: function(){
	    },
			setFilter: function (param) {
				Common.Filter = param || '';
			}
	});
});

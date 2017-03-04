/* global namespace */
var app = app || {};

(function(){
  'use strict';

  app.WinNumber = Backbone.Model.extend({
    initialize: function(){
      console.log('model init');
      console.log('currentTime: '+new Date().getTime());
    },
    defaults: {
      'winNumber': [],
      'expired_at': undefined
    }
  });
})();

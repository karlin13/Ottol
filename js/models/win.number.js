/* global namespace */
var app = app || {};

(function(){
  'use strict';

  app.WinNumber = Backbone.Model.extend({
    initialize: function(){
    },
    defaults: {
      'winNumber': [],
      'expired_at': undefined
    }
  });
})();

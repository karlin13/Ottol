/* global namespace */
var app = app || {};

(function(){
  'use strict';

  app.WinNumber = Backbone.Model.extend({
    defaults: {
      'winNumber': [],
      'expired_at': new Date().getTime() + 10000
    }
  });
})();

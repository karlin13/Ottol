define([
  'backbone'
], function(Backbone){
  return Backbone.Model.extend({
      initialize: function(){
      },
      defaults: {
        'winNumber': [],
        'expired_at': undefined
      }
  });
});

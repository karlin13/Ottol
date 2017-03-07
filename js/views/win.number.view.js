define([
  'jquery',
  'underscore',
  'backbone',
  'downCount',
  'collections/win.number',
  'text!templates/winnumber.html'
], function($, _, Backbone, DownCount, WinNumbers, WinNumberTpl){
  return Backbone.View.extend({
    el: '#winnumber-view',
    template: _.template(WinNumberTpl),
    initialize: function(){
      this.timer = $('#timer');

      this.$el.append(this.el);
    },
    render: function(){
      WinNumbers.updateWinNumber();
      this.$el.html(this.template(WinNumbers.at(0).toJSON()));

      return this;
    }
  });
});

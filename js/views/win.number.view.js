define([
  'underscore',
  'backbone',
  'collections/win.number',
  'text!templates/winnumber.html'
], function(_, Backbone, WinNumbers, WinNumberTpl){
  return Backbone.View.extend({
    el: '#winnumber-view',
    template: _.template(WinNumberTpl),
    initialize: function(){
      this.$el.append(this.render().el);
    },
    render: function(){
      WinNumbers.updateWinNumber();
      this.$el.html(this.template(WinNumbers.at(0).toJSON()));

      return this;
    }
  });
});

define([
  'underscore',
  'backbone',
  'text!templates/index.html'
], function(_, Backbone, IndexTpl){
  return Backbone.View.extend({
    el: '#ottol-app',
    template: _.template(IndexTpl),
    initialize: function(){
      this.$el.html('');

      this.$el.append(this.render().el);
    },
    render: function(){
      this.$el.html(this.template());

      return this;
    }
  });
})

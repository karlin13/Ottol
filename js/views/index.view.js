var app = app || {};

(function(){
  app.IndexView = Backbone.View.extend({
    el: '#ottol-app',
    template: _.template($('#index').html()),
    initialize: function(){
      this.$el.html('');

      this.$el.append(this.render().el);
    },
    render: function(){
      this.$el.html(this.template());

      return this;
    }
  });
})();

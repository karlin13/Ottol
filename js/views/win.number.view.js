var app = app || {};

(function(){
  app.WinNumberView = Backbone.View.extend({
    el: '#ottol-app',
    template: _.template($('#win-number').html()),
    initialize: function(){
      this.$el.html('');

      this.$el.append(this.render().el);
    },
    render: function(){
      this.$el.html(this.template(app.WinNumbers.at(0).toJSON()));

      return this;
    }
  });
})();

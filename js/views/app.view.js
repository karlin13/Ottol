var app = app || {};

(function(){
  app.AppView = Backbone.View.extend({
    el: '#ottol-app',
    initialize: function(){
      app.OttolRouter.on('route', this.render, this);

      this.render();
    },
    render: function(){
      switch (app.Filter) {
        case 'winnumber':
          this.renderWinNumber();
          break;
        default:
          this.renderIndex();
          break;
      }
    },
    renderWinNumber: function(){
      this.$el.html('');

      new app.WinNumberView();
    },
    renderIndex: function(){
      this.$el.html('');

      new app.IndexView();
    }
  });
})();

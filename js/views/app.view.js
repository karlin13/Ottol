var app = app || {};

(function(){
  app.AppView = Backbone.View.extend({
    el: '#ottol-app',
    initialize: function(){
      console.log('app view init');

      app.OttolRouter.on('route', this.render, this);

      this.render();
    },
    render: function(){
      console.log('app view render');
      console.log(app.Filter);
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
      console.log('render index');
      new app.IndexView();
    }
  });
})();

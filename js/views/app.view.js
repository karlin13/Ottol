define([
  'backbone',
  'views/index.view',
  'views/win.number.view',
  'common'
], function(Backbone, IndexView, WinNumberView, Common){
  return Backbone.View.extend({
    el: '#ottol-app',
    initialize: function(){
      Common.Router.on('route', this.render, this);

      this.render();
    },
    render: function(){
      switch (Common.Filter) {
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

      new WinNumberView();
    },
    renderIndex: function(){
      this.$el.html('');

      new IndexView();
    }
  });
});

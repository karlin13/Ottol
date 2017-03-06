define([
  'backbone',
  'views/index.view',
  'views/win.number.view',
], function(Backbone, IndexView, WinNumberView){
  return Backbone.View.extend({
    el: '#ottol-app',
    winNumberView: undefined,
    indexView: undefined,
    initialize: function(){
      this.toggleWinNumberBtn = $('#toggle-winnumber-view');

      this.render();
    },
    events: {
      'click #toggle-winnumber-view': 'toggleWinNumber'
    },
    render: function(){
      this.renderIndex();
    },
    toggleWinNumber: function(){
      let showingView = this.toggleWinNumberBtn.hasClass("opened");

      if(showingView){
        this.toggleWinNumberBtn.removeClass("opened");
        this.toggleWinNumberBtn.addClass("closed");

        this.hideWinNumber();
      }
      else{
        this.toggleWinNumberBtn.removeClass("closed");
        this.toggleWinNumberBtn.addClass("opened");

        this.renderWinNumber();
      }
    },
    renderWinNumber: function(){
      this.winNumberView = this.winNumberView || new WinNumberView();
      return this.winNumberView.render();
    },
    hideWinNumber: function(){
      this.winNumberView.$el.html('');
    },
    renderIndex: function(){
      this.indexView = new IndexView();
    }
  });
});

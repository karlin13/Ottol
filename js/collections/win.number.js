var app = app || {};

(function(){
  'use strict';

  var WinNumbers =  Backbone.Collection.extend({
    model: app.WinNumber,
    localStorage: new Store('win-number'),
    initialize: function(){
      console.log('winnumbers init');
      var storedNumber = this.localStorage.findAll()[0];
      console.log(storedNumber);
      if(!storedNumber){
        this.create({winNumber: this.genWinNumber(46)});
        console.log('created winnumber');
      }
      else{
        if(this.isExpired(storedNumber)){
          this.remove(this.at(0));
          this.create({winNumber: this.genWinNumber(46)});
          console.log('created winnumber');
        }
      }
    },
    genWinNumber: function(limit){
      let generated = [];

      for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random()*limit + 1);
        generated[i] = randomNumber;
      }

      return generated;
    },
    isExpired: function(model){
      console.log('is expired');
      console.log(model);

      let currentTime = new Date().getTime();

      return (model.expired_at - currentTime < 0);
    },
    exists: function(){

    }
  });

  app.WinNumbers = new WinNumbers()
})();

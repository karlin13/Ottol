var app = app || {};

(function(){
  'use strict';

  var WinNumbers =  Backbone.Collection.extend({
    model: app.WinNumber,
    localStorage: new Store('win-number'),
    initialize: function(){
      console.log('winnumbers init');
      //this.updateWinNumber();
    },
    updateWinNumber: function(){
      var storedNumber = this.localStorage.findAll()[0];
      console.log(storedNumber);
      if(!storedNumber){
        this.create({winNumber: this.genWinNumber(46), expired_at: this.getExpiredDate(10000)});
        console.log('created winnumber');
      }
      else{
        if(this.isExpired(storedNumber)){
          console.log(app.WinNumbers);
          this.create({winNumber: this.genWinNumber(46), expired_at: this.getExpiredDate(10000)});
          this.localStorage.destroy({id: storedNumber.id});
          this.remove(storedNumber.id);

          this.fetch();
          console.log(app.WinNumbers);

          console.log('regenerated winnumber');
        }
        else{
          console.log('need to fetch val');
          this.fetch();
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
    getExpiredDate: function(duration){
      let currentTimestamp = new Date().getTime();

      return currentTimestamp + duration;
    }
    isExpired: function(model){
      console.log('is expired');
      console.log(model);

      let currentTime = new Date().getTime();
      console.log(model.expired_at);
      console.log(currentTime);
      console.log(model.expired_at - currentTime);

      return (model.expired_at - currentTime < 0);
    },
    exists: function(){

    }
  });

  app.WinNumbers = new WinNumbers()
})();

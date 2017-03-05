define([
  'backbone',
  'localStorage',
  'models/win.number',
  'common'
], function(Backbone, Store, WinNumber, Common){
  var WinNumbers = Backbone.Collection.extend({
    model: WinNumber,
    localStorage: new Store('win-number'),
    initialize: function(){
    },
    updateWinNumber: function(){
      var storedNumber = this.localStorage.findAll()[0];
      if(!storedNumber){
        this.create({winNumber: this.genWinNumber(45), expired_at: this.genExpiredDate(10000)});
      }
      else{
        if(this.isExpired(storedNumber)){
          this.create({winNumber: this.genWinNumber(45), expired_at: this.genExpiredDate(10000)});

          this.localStorage.destroy({id: storedNumber.id});
          this.remove(storedNumber.id);

          this.fetch();
        }
        else{
          this.fetch();
        }
      }
    },
    genWinNumber: function(limit){
      let generated = [];

      for(let i=0;i<6;){
        let randomNumber = Math.floor(Math.random()*limit + 1);

        if(!(randomNumber in generated)){
          generated[i] = randomNumber;
          i++;
        }
      }

      return generated;
    },
    genExpiredDate: function(duration){
      let currentTimestamp = new Date().getTime();

      return currentTimestamp + Common.NUMBER_DURATION;
    },
    isExpired: function(model){
      let currentTime = new Date().getTime();

      return (model.expired_at - currentTime < 0);
    },
    exists: function(){

    }
  });

  return new WinNumbers();
});

(function(){

  'use strict';

  angular.module("ShoppingListCheckOff", [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var buy = this;

  buy.initialItems = ShoppingListCheckOffService.getInitialItems();

    buy.removeItem = function (index){
      try{
        ShoppingListCheckOffService.bought(index);
      }
      catch(error){
        buy.errorMsg = error.message;
      }
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.errorMsg = "Nothing bought yet";
    bought.showBoughtItems = ShoppingListCheckOffService.showBoughtItems();

}

function ShoppingListCheckOffService(){
  var service = this;

  var boughtItems = [];
  var buyItems = [    {
        name: "Milk Packets",
        quantity: "4"
      },
      {
        name: "Cookies",
        quantity : "10"
      },
      {
        name: "Rice Bags",
        quantity: "7"
      },
      {
        name: "Pizzas",
        quantity: "4"
      },
      {
        name: "Horlicks Bottles",
        quantity: "2"
      }];

      service.showBoughtItems = function(){
          return boughtItems;
      }
      service.getInitialItems = function(){
        return buyItems;
      }

      service.bought = function(index){
        boughtItems.push(buyItems[index]);
        buyItems.splice(index, 1);
        if(buyItems.length == 0){
          throw new Error("Everything is bought");
        }
      }
}


})();

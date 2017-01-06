(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  function NarrowItDownDirectiveController(){
    var ctrl = this;

    ctrl.checkIfEmpty = function(){
      if(ctrl.found.length === 0){
        return true;
      }
      else{
        return false;
      }
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;

    ctrl.searchTerm = null;

    ctrl.found = [];

    ctrl.nothingFoundFlag = false;

    ctrl.deleteAllFlag = false;

    ctrl.narrowItDown = function () {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(result){
        ctrl.found = result;
        if(ctrl.found.length == 0){
          ctrl.nothingFoundFlag = true;
        }
        else{
          ctrl.nothingFoundFlag = false;
        }
      });
    }

    ctrl.removeItem = function(itemIndex){
      ctrl.found.splice(itemIndex,1);
    }
  }


  //My Service Function
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
      .then(function(result){
        var foundItems = [];
        for(var i = 0; i < result.data.menu_items.length; i++){
          if(result.data.menu_items[i].description.indexOf(searchTerm) >= 0 && searchTerm.length > 0){
            foundItems.push(result.data.menu_items[i]);
          }
        }
        return foundItems;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong");
      });
    }
  }


})();

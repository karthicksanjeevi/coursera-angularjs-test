(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiAllCategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$q', '$http', 'ApiAllCategoriesPath', 'ApiBasePath'];

function MenuDataService($q, $http, ApiAllCategoriesPath, ApiBasePath){
  var service = this;

  service.getItemsForCategory = function (searchTerm){
    console.log(searchTerm);
    var deferred = $q.defer();
    return $http({
      method: "GET",
      url: (ApiBasePath + searchTerm)
    })
    .then(function(result){
      deferred.resolve(result.data);
      // console.log(result.data.menu_items);
      return deferred.promise;
    })
    .catch(function(error){
      console.log("Something went wrong in search for "+searchTerm+"!!!");
    });
  }


  service.getAllCategories = function (){
    console.log("In getAllCategories");
    var deferred = $q.defer();
    return $http({
      method: "GET",
      url: (ApiAllCategoriesPath)
    })
    .then(function(result){
      deferred.resolve(result.data);
      return deferred.promise;
    })
    .catch(function(error){
      console.log("Something went wrong!!!");
    });
  }
}


})();

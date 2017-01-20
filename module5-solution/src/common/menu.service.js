(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.firstname = "";
  service.lastame = "";
  service.email = "";
  service.phone = "";
  service.favChoice = "";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavItem = function (item_shortname) {
    var config = {};
    if (item_shortname) {
      config.params = {'item_shortname': item_shortname};
    }

    return $http.get(ApiPath + '/menu_items/' + item_shortname +'.json', config)
    .then(function (response) {
      return response.data;
    })
    .catch(function(error){
      console.log("Something went wrong !!");
    });
  };

  service.storeUserInformation = function (firstname, lastname, email, phone, favDish) {
    service.firstname = firstname;
    service.lastname = lastname;
    service.email = email;
    service.phone = phone;
    service.favDish = favDish;
  };
}



})();

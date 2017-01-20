(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;

  $ctrl.notRegistered = false;
  $ctrl.menuItems = "";

  $ctrl.firstname = MenuService.firstname;
  $ctrl.lastname = MenuService.lastname;
  $ctrl.email = MenuService.email;
  $ctrl.phone = MenuService.phone;
  $ctrl.favDish = MenuService.favDish;

  if( MenuService.firstname == "" ){
    $ctrl.notRegistered = true;
  }
  else{
    $ctrl.notRegistered = false;
    var data = MenuService.getFavItem($ctrl.favDish);

    data.then(function(response){
      console.log(response);
      $ctrl.menuItems = response;
    });
  }
}





})();

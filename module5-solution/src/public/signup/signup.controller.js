(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;

  $ctrl.firstname = "";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favDish = "";

  $ctrl.favDishNotFound = false;
  $ctrl.successRegistration = false;

  $ctrl.storeRegistrationData = function(){
    var data = MenuService.getFavItem($ctrl.favDish);

    data.then(function(response){
      if(response == undefined){
        $ctrl.favDishNotFound = true;
      }
      else{
        $ctrl.favDishNotFound = false;
        MenuService.storeUserInformation($ctrl.firstname, $ctrl.lastname, $ctrl.email, $ctrl.phone, $ctrl.favDish);
        $ctrl.successRegistration = true;
      }

    });

  }

}

})();

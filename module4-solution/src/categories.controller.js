(function () {
'use strict';

angular.module('data')
.controller('MainController', MainController);


MainController.$inject = ['categories'];
function MainController(categories) {
  var myCtrl = this;

  // console.log("categories---> ",categories);
  myCtrl.categories = categories;

}

})();

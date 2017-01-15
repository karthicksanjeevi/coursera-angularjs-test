(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['itemDetail'];
function ItemDetailController(itemDetail) {
  var myItemDetailList = this;
  myItemDetailList.itemDetailList = itemDetail.menu_items;
  console.log(myItemDetailList.itemDetailList);
}

})();

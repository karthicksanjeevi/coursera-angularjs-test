(function () {
'use strict';

angular.module('data')
.component('itemDetail', {
  templateUrl: 'src/views/itemDetail.view.html',
  bindings: {
    itemdetaillist: '<'
  }
});

})();

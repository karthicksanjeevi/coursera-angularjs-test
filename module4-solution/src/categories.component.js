(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/views/categories.view.html',
  bindings: {
    categories: '<'
  }
});

})();

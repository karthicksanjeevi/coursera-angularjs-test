(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // home page
  .state('home', {
    url: '/',
    templateUrl: 'src/views/home.html',
  })

  // category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/views/categories.html',
    controller: 'MainController as myCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/views/itemDetails.html',
    controller: 'ItemDetailController as myItemDetail',
    params: {
      itemId: null
    },
    resolve: {
      itemDetail: ['$stateParams', 'MenuDataService',
      function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });

}

})();

(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider' ];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Categories
 .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'CategoriesControler as categoriesControler',
    resolve: {
      allCategories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // Items
 .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'templates/items.template.html',
    controller: 'ItemsControler as itemsControler',
    resolve: {
      selectedItems: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });
}

})();

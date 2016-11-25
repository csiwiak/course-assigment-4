(function(){
'use strict';


angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http){
  var service = this;


  service.getAllCategories = function () {
    return $http.get("https://davids-restaurant.herokuapp.com/categories.json").then(function (result) {
       return result.data;
   });
  };

  service.getItemsForCategory = function (categoryId) {
      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryId).then(function (result) {
        return  result.data.menu_items;
    });
  };
}


})();

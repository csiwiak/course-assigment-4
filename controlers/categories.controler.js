(function(){
'use strict';

angular.module('data')
.controller('CategoriesControler', CategoriesControler)
;

CategoriesControler.$inject = ['allCategories']
function CategoriesControler(allCategories){
  var categoriesControler = this;
  categoriesControler.items = allCategories;

}


})();

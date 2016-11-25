(function(){
'use strict';

angular.module('data')
.controller('ItemsControler', ItemsControler)
;

ItemsControler.$inject = ['selectedItems']
function ItemsControler(selectedItems){
  var itemsControler = this;
  itemsControler.items = selectedItems;
}


})();

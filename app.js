
(function() {
  var app = angular.module('gemStore', []);

  app.directive('productTitle', function(){
	return{
		resrict: 'E',
		templateUrl: 'product-title.html'
	};
});
  app.directive('productPanels', function(){
  	return {
  		restrict: 'A',
  		templateUrl: 'product-panels.html',
  		controller:function(){}
  		controllerAs: 'panels'
  	};
  });

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("PanelController", function(){
  this.tab = 1;  

  this.selectTab = function(setTab){
  	this.tab = setTab;
  };
  this.isSelected = function(checkTab){
  	return this.tab === checkTab;
  };
  });
  app.controller("ReviewController",function(){
  	this.review = {};

  	this.addReview = function(product){
  		this.review.createdOn = Date.now();
  		product.reviews.push(this.review);
  		this.review={};
  	};
  });

  var gems = [
   { name: 'Azurite',
     description: "shiny stuff azurite",
     price: 2.95,
     images:[
    {full: 'images/azurite.jpg', thumb:'images/azurite-thumb.jpg'}
    ],
    reviews:[
    ] 
   },
    { name: 'Bloodstone',
     description: "shiny stuff bloodstone",
      price: 5.95,
      images:[
    {full: 'images/bloodstone.jpg', thumb:'images/bloodstone-thumb.jpg'}
    ],    
    reviews:[
    ] 
     },
    { name: 'Zircon',
    description: "shiny stuff zircon",
    price: 3.95,images:[
    {full: 'images/zircon.jpg', thumb:'images/zircon-thumb.jpg'}
    ],    
    reviews:[
    ] 
     }
  ];






/*closing brackets*/
})();

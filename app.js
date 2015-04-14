
(function() {
  var app = angular.module('gemStore', []);

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
    {  	stars:5,
    	body:"i love this product",
    	author: "person@email.com"
    },
    {  	stars:1,
    	body:"i hate this product",
    	author:"hater@gmail.com"
    }    
    ] 
   },
    { name: 'Bloodstone',
     description: "shiny stuff bloodstone",
      price: 5.95,
      images:[
    {full: 'images/bloodstone.jpg', thumb:'images/bloodstone-thumb.jpg'}
    ],    
    reviews:[
    {  	stars:5,
    	body:"i love this product",
    	author: "person@email.com"
    },
    {  	stars:1,
    	body:"i hate this product",
    	author:"hater@gmail.com"
    }    
    ] 
     },
    { name: 'Zircon',
    description: "shiny stuff zircon",
    price: 3.95,images:[
    {full: 'images/zircon.jpg', thumb:'images/zircon-thumb.jpg'}
    ],    
    reviews:[
    {  	stars:5,
    	body:"i love this product",
    	author: "person@email.com"
    },
    {  	stars:1,
    	body:"i hate this product",
    	author:"hater@gmail.com"
    }    
    ] 
     }
  ];


})();


(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
   { name: 'Azurite',
     price: 2.95,
     images:[
    {full: 'images/azurite.jpg', thumb:'images/azurite-thumb.jpg'}
    ] 
   },
    { name: 'Bloodstone', price: 5.95,images:[
    {full: 'images/bloodstone.jpg', thumb:'images/bloodstone-thumb.jpg'}
    ] },
    { name: 'Zircon', price: 3.95,images:[
    {full: 'images/zircon.jpg', thumb:'images/zircon-thumb.jpg'}
    ] }
  ];
})();

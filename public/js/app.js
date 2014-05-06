global._  = require("underscore");
require("angular");
require("angular-route");
require("angular-animate");
require("./vendor/angular-ui.js");

console.log("Incremental Miner !");

var app = angular.module("myApp", ['ngRoute']);

global.app = app;

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


require("./controllers.js");

// var homeController = require("controllers/homeController");
// app.controller('homeController', homeController);





// app.controller('cookController', ['ordersData', '$scope' , require("./controllers/cookController")]);
// app.controller('ccOrderController', ['ordersData', '$scope' , '$rootScope', require("./controllers/ccOrderController")]);
// app.controller('topbarController', ['$scope' , '$location', 'ordersData', require("./controllers/topbarController")]);

// app.controller('ccProductsController', ['$rootScope', '$scope' , '$q' , 'ajaxService', require("./controllers/ccProductsController")]);


// app.service('ajaxService', ['$resource', '$http', require("./services/ajaxService")]);
// app.service('ordersData', ['$rootScope', require("./services/ordersData")]);


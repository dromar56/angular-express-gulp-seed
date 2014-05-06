global._  = require("underscore");
require("angular");
require("angular-route");
require("angular-animate");
require("../../bower_components/angular-ui/build/angular-ui.js");

var app = angular.module("myApp", ['ngRoute']);

global.app = app;

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

require("./controllers.js");

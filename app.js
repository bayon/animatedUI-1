//initial angular module
// registering an array of other modules to be used 
// I don't think I am currently using ngRoute.
var app = angular.module('app',["ngRoute","phoneList","tickets"]); 

//routing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/red", {
        templateUrl : "red.html"
    });
});

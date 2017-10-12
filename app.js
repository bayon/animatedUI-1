//initial angular module
var app = angular.module('app',["ngRoute"]);

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

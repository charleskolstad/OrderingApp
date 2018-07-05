angular.module("Admin", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/allUsers", {
        templateUrl: "allusers.html"
    }).when("/userProfile", {
        templateUrl: "profile.html"
    }).when("/allOrders", {
        templateUrl: "orders.html"
    }).when("/categories", {
        templateUrl: "categories.html"
    }).otherwise({

    });
}).constant("dataUrl", "http://localhost:52055/");
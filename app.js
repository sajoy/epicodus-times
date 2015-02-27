var epicodusTimes  = angular.module('epicodusTimes', ['ui.router']);

epicodusTimes.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('home.divisions', {
    url: "/divisions",
    templateUrl: "partials/home.divisions.html",
    controller: "DivisionsController"
  });

});

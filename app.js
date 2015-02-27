var epicodusTimes  = angular.module('epicodusTimes', ['ui.router']);

epicodusTimes.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});

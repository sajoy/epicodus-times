epicodusTimes.controller('ReportersController', function ReportersCtrl($scope, $state, $stateParams, DivisionsFactory, UtilitiesFactory) {
  $scope.division = UtilitiesFactory.findById(DivisionsFactory.divisions, $stateParams.divisionId)
  $scope.addReporter = function() {
    $scope.division.reporters.push({name: $scope.reporterName, years: $scope.years, birthday: $scope.birthday})
    $scope.reporterName = null;
    $scope.years = null;
    $scope.birthday = null;
    $state.go('home.divisions');
  }
});

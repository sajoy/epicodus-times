epicodusTimes.controller("ReportersController", function ReportersCtrl($scope, $stateParams, DivisionsFactory, UtilitiesFactory) {
  $scope.division = UtilitiesFactory.findById(DivisionsFactory.divisions, $stateParams.divisionId)
  $scope.addReporter = function () {
    $scope.division.reporters.push({name: $scope.reporterName, years: $scope.years, birthday: $scope.birthday})
  }
});

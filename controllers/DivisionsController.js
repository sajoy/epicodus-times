epicodusTimes.controller('DivisionsController', function DivisionsCtrl($scope, DivisionsFactory) {
  $scope.divisions = DivisionsFactory.divisions;
  $scope.DivisionsFactory = DivisionsFactory;
  $scope.predicate = '';
});

var myNameSpace = angular.module('exo', []);
myNameSpace.controller('AppCtrl', ['$scope', function($scope) {
    $scope.countmodel = "";
    $scope.textIsSaved = false;

    this.clearSearch = function() {
        $scope.countmodel = "";
    }
    this.saveText = function() {
        $scope.textIsSaved = true;
    }
}]);
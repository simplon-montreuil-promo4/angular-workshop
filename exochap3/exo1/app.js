var app = angular.module('interfaceMessage', []); //reference au html ng app
app.controller('MainCtrl', ['$scope', function($scope){
$scope.note = "";
$scope.maxLength = 100;
$scope.$watch('note', function(newValue, oldValue) {
//$scope.note.length = newValue.length; //à parti du moment ou on a un chagement dansa l'input lenght = newvalue/length
if($scope.note.length > $scope.maxLength) {
	$scope.note = oldValue;
	$scope.rouge= "bgRed";
}

});
//ng-click s'utilise avec une fonction, en
//dehors de watch ici 
//dans le html on apelle la fonction donc avec les()
$scope.sauvegarder = function (){
	$scope.save = "Votre note a ete sauvergardee";
	$scope.message2 = "bgGreen";
};

$scope.effacer = function() {
	$scope.note = "";
}

}]);
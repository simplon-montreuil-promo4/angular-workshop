var app = angular.module('NoteApp', []);




app.controller('MainCtrl', ['$scope', function($scope){
  $scope.count = 100;
  $scope.messageNote = "";

  // Lien avec le contenu de la Note pour décrémenter la valeur du nombre de caractères
  $scope.$watch('messageNote', function(newValue, oldValue) {
    oldValue = 100;
    $scope.count = oldValue - newValue.length;
  });

  // Faire apparaître l'info Danger, fonction pour le watch de count
  function afficheDanger(value) {
    if(value < 10) {
      return $scope.booleandanger = true
    } else if (value > 10) {
      return $scope.booleandanger = false;
    }
  };
  $scope.$watch('count', afficheDanger);

  //fonctions intégrées directement dans le HTML avec ngClick
  $scope.afficheSauve = function(value) {
    value = $scope.count;
    if (value < 100) {
      return $scope.booleansauve = true;
    }
  };
  $scope.effaceNote = function(value) {
    value = $scope.count;
    if (value < 100) {
    return $scope.messageNote = "",
           $scope.booleanmodif = true;
    }
  };

  // Réinitialiser les variable
  function setDefault (value) {
    if(value < 100) {
      $scope.booleanmodif = false;
      $scope.booleansauve = false;
    }
  };
  $scope.$watch('count', setDefault);

  // Contenus des div infos + le boolean pour les cacher au début
  $scope.noteModif = "Note modifiée !";
  $scope.noteSauve = "Note sauvegardée !";
  $scope.noteDanger = "Attention, moins de 10 caractères restants !";
  $scope.booleanmodif = false;
  $scope.booleansauve = false;
  $scope.booleandanger = false;
}]);




// Contenus Div Infos pour la Note
app.directive('infomodif', function() {
  return {
    restrict: 'E',
    template: '<div class="zoneInfo alert alert-warning" ng-show="booleanmodif"><p class="modif">{{ noteModif }}</p></div>'
  };
});



app.directive('infosauve', function() {
  return {
    restrict: 'E',
    template: '<div class="zoneInfo alert alert-success" ng-show="booleansauve"><p class="sauve">{{ noteSauve }}</p></div>'
  };
});



app.directive('infodanger', function() {
  return {
    restrict: 'E',
    template: '<div class="zoneInfo alert alert-danger" ng-show="booleandanger"><p class="danger">{{ noteDanger }}</p></div>'
  };
});

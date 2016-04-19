var app = angular.module('example', [/*'ngResource'*/]);


/*app.factory('Weather', ['$resource', function($resource) {
  return $resource('http://api.openweathermap.org/data/2.5/weather?q=:place');
}]);*/


app.controller('MainCtrl', ['$scope', function($scope/*, Weather*/) {
  $scope.name = "Bruce Wayne";
  $scope.nameLength = 0;
  $scope.$watch('name', function(newValue, oldValue) {
    $scope.nameLength = newValue.length;
  });
  /*$scope.weather = 'Unknown';
  Weather.get({place : 'Lyon, France'}).$promise.then(function(data) {
    $scope.weather = data.weather[0].description;
  });*/
  $scope.customer1 = {
    name : "Clark Kent",
    address: {
      city : "Paris",
      street : "25 Boulevard Haussman"
    }
  };
}]);



app.directive('address', function() {
  return {
    scope: {
      street :'=',
      city : '='
    },
    restrict : 'E',
    template : '<p><div class="glyphicon glyphicon-road"></div> {{ street }}, {{ city }}</p>'
  };
});

app.directive('customer', function() {
  return {
    scope: {
      customer: '='
    },
    restrict: 'E',
    template: '<p>{{ customer.name }}</p><address street="customer.address.street" city="customer.address.city"></address>'
  }
});

app.controller('$scope', function ($scope) {
  $scope.$watch('customer.name', function(newVal, oldVal) {
    var uppedVal = newVal.toUpperCase();
    if (newVal != uppedVal) {
      $scope.customer.name = uppedVal;
    }
  });
});

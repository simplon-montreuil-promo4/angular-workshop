countersApp.controller("countersCtrl",function(){
  var self = this;
  self.count = 0;
  self.increment = function(){
    self.count++;
  };
  self.decrement = function() {
    self.count--;
  };
});

countersApp.controller("FormCtrl", function($scope) {
  $scope.typing = "";
});

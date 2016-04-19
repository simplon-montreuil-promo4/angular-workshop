var app = angular.module('interface', []);
app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.services = [
{
    name: 'Web Development',
    price: 300,
    active:true
},{
    name: 'Design',
    price: 400,
    active:false
},{
    name: 'Integration',
    price: 250,
    active:false
},{
    name: 'Formation',
    price: 220,
    active:false
}
];
$scope.totalService = 1; //par default un car 1 d'activé par default
$scope.total = function (nouveauService){ //pour recupere 1 ou -1 c'est un parametre
    return $scope.totalService += nouveauService;
}
 
 $scope.toggleActive = function (service) {
    service.active = !service.active; //false ou tue
    if (service.active === true) {
        $scope.total(1);
    }
    else{
        $scope.total(-1);
    }
 };

}])
//quand on clique on envoie la reference Nine
//on le recupere dans la fonction toggle active
//on peut acceder à l'objet savoir si c'est
//true ou false
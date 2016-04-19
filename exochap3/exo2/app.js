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

}])
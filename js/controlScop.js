app.controller('myCtrl', function($scope){
	
	$scope.nbrSelection = 1;
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

	
	$scope.somme = 300;
	$scope.selection = function(index, service){
		$scope.nbrSelection += 1;
		if (service.active === true) {
			$scope.nbrSelection -= 2;
		};
		service.active = !service.active; //pour changer la couleur des services au click
		
		if (service.active === true) {
			$scope.somme = $scope.somme + service.price;
		} else {
			$scope.somme = $scope.somme - service.price;
		};
		
	};

});
angular.module("ServicesApp").controller("ServicesController", ["$http", function(http) {
	var self=this;

	this.services = [
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
	
	self.toggleActive = function(s){
		s.active = !s.active;
		self.applyCode();
	};
	self.total = function(){

		var total = 0;
		self.count=0;

		angular.forEach(self.services, function(s){
			if (s.active){
				total+= s.price;
				self.count++;
			}
		});

		return total;
	};
} ]);

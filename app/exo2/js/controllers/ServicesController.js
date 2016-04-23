'use strict';
servicesApp.controller('ServicesController', function() {
  this.totalServices = 1;
  this.totalPrice = 300;
  
  this.services = [
    {
      name: 'Web Development',
      price: 300,
      active: true
    },
    {
      name: 'Design',
      price: 400,
      active: false
    },
    {
      name: 'Integration',
      price: 250,
      active: false
    },
    {
      name: 'Formation',
      price: 220,
      active: false
    }
  ];

  const total = (newService = 0, newPrice = 0) => {
    this.totalServices += newService;
    this.totalPrice += newPrice;
  };

  
  this.toggleActive = function (service) {
    if (service.active === true ) {
      service.active = false;
      total(-1, -service.price);
    } else if (service.active === false) {
      service.active = true;
      total(1, service.price);
    }
  };
});

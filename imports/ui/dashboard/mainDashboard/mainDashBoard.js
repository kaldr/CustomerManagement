var angular, angularMaterial, angularMeteor, basicCustomerData, mainDashboardCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

angularMaterial = require('angular-material');


import template from './mainDashboard.html'
;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

mainDashboardCtrl = (function() {
  function mainDashboardCtrl() {}

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [angularMeteor, angularMaterial, basicCustomerData]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

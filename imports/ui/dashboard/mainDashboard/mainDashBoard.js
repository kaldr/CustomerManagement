var angular, angularMeteor, basicCustomerData, mainDashboardCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');


import template from './mainDashboard.html'
;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

mainDashboardCtrl = (function() {
  function mainDashboardCtrl() {}

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [angularMeteor, basicCustomerData]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

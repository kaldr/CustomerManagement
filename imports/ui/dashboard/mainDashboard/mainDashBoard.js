var angular, angularMaterial, angularMeteor, mainDashboardCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

angularMaterial = require('angular-material');


import template from './mainDashboard.html'
;

mainDashboardCtrl = (function() {
  function mainDashboardCtrl() {}

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [angularMeteor, angularMaterial]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

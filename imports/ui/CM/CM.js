var CMCtrl, MainDashboard, angular, angularMeteor, config, name, ngMaterial, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

ngMaterial = require('angular-material');

uiRouter = require("angular-ui-router");

MainDashboard = require("../dashboard/mainDashboard/mainDashboard").MainDashboard;

import template from './CM.html';

CMCtrl = (function() {
  'ngInject';
  function CMCtrl() {}

  return CMCtrl;

})();

config = function($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  return $stateProvider.state('mainDashboard', {
    url: '/mainDashboard',
    template: '<main-dashboard></main-dashboard>'
  }).state("customerManagement", {
    url: "/customerManagement",
    template: '<customer-management></customer-management>'
  }).state("customerOperation", {
    url: "/customerOperation",
    template: '<customer-operation></customer-operation>'
  });
};

name = 'cm';

exports.cm = angular.module(name, [angularMeteor, ngMaterial, uiRouter, MainDashboard]).component(name, {
  template: template,
  controllerAs: name,
  controller: CMCtrl
}).config(config).name;

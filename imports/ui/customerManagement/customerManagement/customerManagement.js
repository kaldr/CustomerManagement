var CustomerProfile, angular, angularMeteor, config, customerManagementCtrl, name, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

uiRouter = require('angular-ui-router');

CustomerProfile = require('../customerProfile/customerProfile').CustomerProfile;

import template from './customerManagement.html';

customerManagementCtrl = (function() {
  function customerManagementCtrl($state) {
    'ngInject';
  }

  return customerManagementCtrl;

})();

config = function($stateProvider, $urlRouterProvider) {
  'ngInject';
  'use strict';
  $urlRouterProvider.when('customerManagement', 'customerManagement.customerProfile');
  return $stateProvider.state('customerManagement.index', {
    url: '/index',
    views: {
      customerManagement: {
        template: '<customer-profile></customer-profile>'
      }
    }
  }).state('customerManagement.customerProfile', {
    url: '',
    views: {
      customerManagement: {
        template: '<customer-profile></customer-profile>'
      }
    }
  });
};

name = 'customerManagement';

exports.customerManagement = angular.module(name, [angularMeteor, uiRouter, CustomerProfile]).component(name, {
  template: template,
  controller: customerManagementCtrl,
  controllerAs: name
}).config(config).name;

var CMCtrl, MainDashboard, angular, angularMeteor, config, customerManagement, name, ngMaterial, run, uiRouter;

angular = require('angular');

angularMeteor = require('angular-meteor');

ngMaterial = require('angular-material');

uiRouter = require("angular-ui-router");

MainDashboard = require("../dashboard/mainDashboard/mainDashboard").MainDashboard;

customerManagement = require('../customerManagement/customerManagement/customerManagement').customerManagement;

import template from './CM.html';

CMCtrl = (function() {
  function CMCtrl($reactive, $scope, $state, $location) {
    $reactive(this).attach($scope);
    this.currentNavItem = $location.path().split("/")[1];
    if (!this.currentNavItem) {
      this.currentNavItem = 'mainDashboard';
    }
    this.navigation = {
      mainDashboard: {
        name: '首页',
        tooltip: "信息看板",
        iconClass: 'fa-home'
      },
      'customerManagement.customerProfile': {
        name: '客户管理',
        tooltip: "管理客户档案与分配",
        iconClass: 'fa-users'
      },
      customerOperation: {
        name: "客户维护",
        tooltip: "回访、礼品和活动等多种维护方式",
        iconClass: 'fa-heartbeat'
      }
    };
    this.title = '客户关系管理';
  }

  return CMCtrl;

})();

config = function($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/mainDashboard');
  return $stateProvider.state('mainDashboard', {
    url: '/mainDashboard',
    views: {
      CM: {
        template: '<main-dashboard id="mainDashboard" layout-fill layout="column"></main-dashboard>'
      }
    }
  }).state("customerManagement", {
    abstract: true,
    url: "/customerManagement",
    views: {
      CM: {
        template: '<customer-management></customer-management>'
      }
    }
  }).state("customerOperation", {
    url: "/customerOperation",
    views: {
      CM: {
        template: '<customer-operation></customer-operation>'
      }
    }
  });
};

run = function($state, $rootScope) {
  'ngInject';
  'use strict';
  return $rootScope.$on('$stateChangeSuccess', function(event, current) {
    return $rootScope.currentNavItem = $state.current.name;
  });
};

name = 'cm';

exports.cm = angular.module(name, [angularMeteor, ngMaterial, uiRouter, MainDashboard, customerManagement]).config(config).component(name, {
  template: template,
  controllerAs: name,
  controller: CMCtrl
}).name;

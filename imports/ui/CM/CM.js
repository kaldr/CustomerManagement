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
        name: '看板',
        tooltip: "信息看板",
        iconClass: 'fa-tachometer'
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
    this.famous();
  }

  CMCtrl.prototype.famous = function() {
    var Engine, colors, context, createSurface, famous, i, layout, modifier, ratios, surfaces;
    famous = require('famous');
    Engine = famous.core.Engine;
    modifier = new famous.modifiers.StateModifier({
      size: [void 0, 500]
    });
    context = Engine.createContext(document.getElementById("famous"));
    console.log(context);
    colors = ['rgba(256,0,0,.7)', 'rgba(0,256,0,.7)', 'rgba(0,0,256,0.7)'];
    ratios = [1, 3, 5];
    console.log("ratio ok");
    layout = new famous.views.FlexibleLayout({
      ratios: ratios,
      transition: {
        curve: 'easeInOut',
        duration: 1000
      }
    });
    console.log('layout ok');
    createSurface = function(i) {
      return new famous.core.Surface({
        size: [void 0, void 0],
        properties: {
          backgroundColor: colors[i % 3]
        }
      });
    };
    surfaces = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = ratios.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(createSurface(i));
      }
      return results;
    })();
    layout.sequenceFrom(surfaces);
    return context.add(modifier).add(layout);
  };

  return CMCtrl;

})();

config = function($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/mainDashboard');
  return $stateProvider.state('mainDashboard', {
    url: '/mainDashboard',
    views: {
      'cm@': {
        template: '<main-dashboard id="mainDashboard" layout-fill layout="column"></main-dashboard>'
      }
    }
  }).state("customerManagement", {
    abstract: true,
    url: "/customerManagement",
    views: {
      "cm@": {
        template: '<customer-management></customer-management>'
      }
    }
  }).state("customerOperation", {
    url: "/customerOperation",
    views: {
      "cm@": {
        template: '<customer-operation></customer-operation>'
      }
    }
  });
};

run = function($state, $rootScope) {
  'ngInject';
  'use strict';
  $rootScope.$on('$stateChangeSuccess', function(event, current) {
    return $rootScope.currentNavItem = $state.current.name;
  });
  return $rootScope.$on('$stateChangeStart', (function(_this) {
    return function() {
      return $animate.enabled(false);
    };
  })(this));
};

name = 'cm';

exports.cm = angular.module(name, [angularMeteor, ngMaterial, uiRouter, MainDashboard, customerManagement]).config(config).component(name, {
  template: template,
  controllerAs: name,
  controller: CMCtrl
}).name;

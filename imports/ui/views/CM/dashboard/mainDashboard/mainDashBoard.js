import template from './mainDashboard.html';
var angular, angularMeteor, basicCustomerData, basicCustomerStatistic, expandablePanelWithStatistic, mainDashboardConfig, mainDashboardCtrl, name, recentJointCustomer, recentTaskComplishStatus, recentUserTask,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular = require('angular');

angularMeteor = require('angular-meteor');

mainDashboardConfig = require('./config.view').mainDashboardConfig;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

basicCustomerStatistic = require('../components/basicCustomerStatistic/basicCustomerStatistic').basicCustomerStatistic;

recentJointCustomer = require('../components/recentJointCustomer/recentJointCustomer').recentJointCustomer;

recentTaskComplishStatus = require('../components/recentTaskComplishStatus/recentTaskComplishStatus').recentTaskComplishStatus;

recentUserTask = require('../components/recentUserTask/recentUserTask').recentUserTask;

expandablePanelWithStatistic = require('../../../../layout/page/dashboard/expandablePanelWithStatistic').expandablePanelWithStatistic;

name = 'mainDashboard';

mainDashboardCtrl = (function(superClass) {
  extend(mainDashboardCtrl, superClass);

  function mainDashboardCtrl($reactive, $scope) {
    this.panelStatus = mainDashboardConfig.panel;
    this.topPanelStatus = mainDashboardConfig.toppanel;
    this.panelmode = 'list';
    this.allPanelsShownButton = {
      status: true,
      disable: true
    };
    mainDashboardCtrl.__super__.constructor.call(this, name, {}, $reactive, $scope);
  }

  return mainDashboardCtrl;

})(expandablePanelWithStatistic);

exports.MainDashboard = angular.module(name, [angularMeteor, basicCustomerData, basicCustomerStatistic, recentJointCustomer, recentTaskComplishStatus, recentUserTask]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

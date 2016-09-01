var angular, angularMeteor, basicCustomerData, basicCustomerStatistic, mainDashboardCtrl, name, recentJointCustomer, recentTaskComplishStatus, recentUserTask;

angular = require('angular');

angularMeteor = require('angular-meteor');


import template from './mainDashboard.html'
;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

basicCustomerStatistic = require('../components/basicCustomerStatistic/basicCustomerStatistic').basicCustomerStatistic;

recentJointCustomer = require('../components/list/simpleList/recentJointCustomer/recentJointCustomer').recentJointCustomer;

recentTaskComplishStatus = require('../components/list/simpleList/recentTaskComplishStatus/recentTaskComplishStatus').recentTaskComplishStatus;

recentUserTask = require('../components/list/simpleList/recentUserTask/recentUserTask').recentUserTask;

mainDashboardCtrl = (function() {
  function mainDashboardCtrl() {}

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [angularMeteor, basicCustomerData, basicCustomerStatistic, recentJointCustomer, recentTaskComplishStatus, recentUserTask]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

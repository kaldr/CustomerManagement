import template from './mainDashboard.html';
var basicCustomerData, basicCustomerStatistic, mainDashboardCtrl, name, recentJointCustomer, recentTaskComplishStatus, recentUserTask;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

basicCustomerStatistic = require('../components/basicCustomerStatistic/basicCustomerStatistic').basicCustomerStatistic;

recentJointCustomer = require('../components/list/simpleList/recentJointCustomer/recentJointCustomer').recentJointCustomer;

recentTaskComplishStatus = require('../components/list/simpleList/recentTaskComplishStatus/recentTaskComplishStatus').recentTaskComplishStatus;

recentUserTask = require('../components/list/simpleList/recentUserTask/recentUserTask').recentUserTask;

mainDashboardCtrl = (function() {
  function mainDashboardCtrl($reactive, $scope) {
    $reactive(this).attach($scope);
  }

  mainDashboardCtrl.prototype.closeList = function($element) {
    return console.log($element);
  };

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [basicCustomerData, basicCustomerStatistic, recentJointCustomer, recentTaskComplishStatus, recentUserTask]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

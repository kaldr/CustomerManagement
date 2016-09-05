import template from './recentJointCustomer.html';
var chartConfig, name, recentJointCustomerCtrl, simpleList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

chartConfig = require('./config.chart').chartConfig;

name = 'recentJointCustomer';

simpleList = require('../simpleList').simpleList;

recentJointCustomerCtrl = (function(superClass) {
  extend(recentJointCustomerCtrl, superClass);

  function recentJointCustomerCtrl($reactive, $scope) {
    var config;
    config = this.config();
    recentJointCustomerCtrl.__super__.constructor.call(this, $reactive, $scope, name, config);
    this.chart = chartConfig;
  }

  recentJointCustomerCtrl.prototype.config = function() {
    return {
      title: '顾客',
      chartTitle: "顾客统计"
    };
  };

  return recentJointCustomerCtrl;

})(simpleList);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentJointCustomerCtrl,
  controllerAs: '$ctrl',
  bindings: {
    panel: "=",
    panelmode: "="
  }
}).name;

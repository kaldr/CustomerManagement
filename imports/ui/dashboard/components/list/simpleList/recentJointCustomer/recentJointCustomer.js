import template from './recentJointCustomer.html';
var name, recentJointCustomerCtrl, simpleList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

name = 'recentJointCustomer';

simpleList = require('../simpleList').simpleList;

recentJointCustomerCtrl = (function(superClass) {
  extend(recentJointCustomerCtrl, superClass);

  function recentJointCustomerCtrl($reactive, $scope) {
    var config;
    config = this.config();
    recentJointCustomerCtrl.__super__.constructor.call(this, $reactive, $scope, name, config);
    this.chart = this.constructChart();
  }

  recentJointCustomerCtrl.prototype.config = function() {
    return {
      title: '顾客',
      chartTitle: "顾客统计"
    };
  };

  recentJointCustomerCtrl.prototype.constructChart = function() {
    return {
      data: {
        columns: [['30以下', 24, 30, 13, 40, 12], ['30-40', 12, 3, 8, 5, 6], ['40-50', 312, 13, 48, 5, 6], ['50-60', 12, 3, 8, 5, 6], ['60-70', 12, 3, 82, 5, 6], ['70以上', 121, 3, 8, 15, 6]],
        names: {
          '30以下': '30岁以下',
          '30-40': "30-40岁",
          '40-50': "40-50岁",
          '50-60': "50-60岁",
          '60-70': "60-70岁",
          '70以上': "70岁以上"
        },
        keys: {
          value: ['30以下', '30-40', '40-50', '50-60', '60-70', '70以上']
        },
        colors: {
          '30以下': '#0277BD',
          '30-40': "#0288D1",
          '40-50': "#039BE5",
          '50-60': "#03A9F4",
          '60-70': "#29B6F6",
          '70以上': "#4FC3F7"
        },
        type: "donut"
      },
      legend: {
        position: 'right',
        show: false
      },
      size: {
        height: 200,
        width: 300
      }
    };
  };

  return recentJointCustomerCtrl;

})(simpleList);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentJointCustomerCtrl,
  controllerAs: '$ctrl',
  bindings: {
    panel: "="
  }
}).name;

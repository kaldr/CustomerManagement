var chartConfig, expandablePanel, name, recentJointCustomerCtrl, ref, template,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

name = 'recentJointCustomer';

chartConfig = require('./config.chart').chartConfig;

ref = require('/imports/ui/layout/panel/expandablePanel/expandablePanel'), expandablePanel = ref.expandablePanel, template = ref.template;

recentJointCustomerCtrl = (function(superClass) {
  extend(recentJointCustomerCtrl, superClass);

  function recentJointCustomerCtrl($reactive, $scope, $window, $element) {
    var config;
    config = this.config();
    recentJointCustomerCtrl.__super__.constructor.call(this, name, config, $reactive, $scope, $window, $element);
    this.chart = chartConfig.basicChart;
    template = this.template;
  }

  recentJointCustomerCtrl.prototype.config = function() {
    return {
      title: '顾客',
      chartTitle: "顾客统计"
    };
  };

  return recentJointCustomerCtrl;

})(expandablePanel);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentJointCustomerCtrl,
  controllerAs: '$ctrl',
  bindings: {
    panel: "=",
    panelmode: "="
  }
}).name;

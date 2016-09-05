import template from './recentUserTask.html';
var chartConfig, name, recentUserTaskCtrl, simpleList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

simpleList = require('../simpleList').simpleList;

chartConfig = require('./config.chart').chartConfig;

name = 'recentUserTask';

recentUserTaskCtrl = (function(superClass) {
  extend(recentUserTaskCtrl, superClass);

  recentUserTaskCtrl.prototype.config = function() {
    return {
      title: "动态",
      color: "grey",
      chartTitle: "今日操作统计"
    };
  };

  function recentUserTaskCtrl($reactive, $scope) {
    recentUserTaskCtrl.__super__.constructor.call(this, $reactive, $scope, name, this.config());
    this.chart = chartConfig;
  }

  recentUserTaskCtrl.prototype.showMenu = function($mdOpenMenu, ev) {
    var originatorEv;
    originatorEv = ev;
    return $mdOpenMenu(ev);
  };

  return recentUserTaskCtrl;

})(simpleList);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentUserTaskCtrl,
  controllerAs: "$ctrl",
  bindings: {
    panel: "=",
    panelmode: "="
  }
}).name;

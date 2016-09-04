import template from './recentTaskComplishStatus.html';
var name, recentTaskComplishStatusCtrl, simpleList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

name = 'recentTaskComplishStatus';

simpleList = require('../simpleList').simpleList;

recentTaskComplishStatusCtrl = (function(superClass) {
  extend(recentTaskComplishStatusCtrl, superClass);

  recentTaskComplishStatusCtrl.prototype.closeList = function(element) {
    var showRecentTaskComplishStatus;
    return showRecentTaskComplishStatus = false;
  };

  recentTaskComplishStatusCtrl.prototype.config = function() {
    return {
      title: "任务",
      chartTitle: "今日完成情况"
    };
  };

  function recentTaskComplishStatusCtrl($reactive, $scope) {
    var config;
    config = this.config();
    recentTaskComplishStatusCtrl.__super__.constructor.call(this, $reactive, $scope, name, config);
    $reactive(this).attach($scope);
    this.tasks = {
      finished: {
        total: 210,
        month: 60,
        week: 21,
        today: 1
      },
      waiting: {
        total: 20,
        month: 0,
        week: 18,
        today: 5
      },
      started: {
        total: 18,
        month: 8,
        week: 2,
        today: 3
      }
    };
    this.complishRate = 85.2;
    this.chart = {
      size: {
        height: 200,
        width: 300
      },
      data: {
        columns: [['data', this.complishRate]],
        type: 'gauge'
      },
      color: {
        pattern: ['#0277BD', '#0288D1', "#039BE5", "#03A9F4"]
      }
    };
  }

  return recentTaskComplishStatusCtrl;

})(simpleList);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentTaskComplishStatusCtrl,
  controllerAs: '$ctrl',
  bindings: {
    panel: "="
  }
}).name;

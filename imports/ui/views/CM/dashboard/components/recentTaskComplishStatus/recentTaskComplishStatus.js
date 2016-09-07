var chartConfig, expandablePanel, name, recentTaskComplishStatusCtrl, ref, template,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

name = 'recentTaskComplishStatus';

ref = require('/imports/ui/layout/panel/expandablePanel/expandablePanel'), expandablePanel = ref.expandablePanel, template = ref.template;

chartConfig = require('./config.chart').chartConfig;

recentTaskComplishStatusCtrl = (function(superClass) {
  extend(recentTaskComplishStatusCtrl, superClass);

  recentTaskComplishStatusCtrl.prototype.closeList = function(element) {
    var showRecentTaskComplishStatus;
    return showRecentTaskComplishStatus = false;
  };

  recentTaskComplishStatusCtrl.prototype.config = function() {
    return {
      title: "任务"
    };
  };

  function recentTaskComplishStatusCtrl($reactive, $scope, $window) {
    var config;
    config = this.config();
    recentTaskComplishStatusCtrl.__super__.constructor.call(this, name, config, $reactive, $scope, $window);
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
        week: 12,
        today: 3
      }
    };
    this.complishRate = 85.2;
    this.chart = chartConfig.basicChart;
  }

  return recentTaskComplishStatusCtrl;

})(expandablePanel);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentTaskComplishStatusCtrl,
  controllerAs: '$ctrl',
  bindings: {
    panel: "=",
    panelmode: "="
  }
}).name;

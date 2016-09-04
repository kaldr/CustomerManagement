import template from './recentUserTask.html';
var name, recentUserTaskCtrl, simpleList,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

name = 'recentUserTask';

simpleList = require('../simpleList').simpleList;

recentUserTaskCtrl = (function(superClass) {
  extend(recentUserTaskCtrl, superClass);

  recentUserTaskCtrl.prototype.config = function() {
    return {
      title: "动态",
      color: "grey"
    };
  };

  function recentUserTaskCtrl($reactive, $scope) {
    recentUserTaskCtrl.__super__.constructor.call(this, $reactive, $scope, name, this.config());
    this.chart = this.constructChart();
  }

  recentUserTaskCtrl.prototype.showMenu = function($mdOpenMenu, ev) {
    var originatorEv;
    originatorEv = ev;
    return $mdOpenMenu(ev);
  };

  recentUserTaskCtrl.prototype.constructChart = function() {
    return {
      data: {
        columns: [['本周操作', 24, 30, 13, 40, 12], ['今日操作', 12, 3, 8, 5, 6]],
        colors: {
          '今日操作': '#0277BD',
          '本周操作': '#ccc'
        },
        types: {
          '今日操作': 'bar',
          '本周操作': 'area-spline'
        }
      },
      legend: {
        show: false
      },
      axis: {
        rotated: true,
        x: {
          type: 'category',
          tick: {
            outer: false
          },
          categories: ['朱晓丽', '邓超', '王宝强', '林允儿', '金泰妍']
        },
        y: {
          show: false
        }
      },
      size: {
        height: 166
      }
    };
  };

  return recentUserTaskCtrl;

})(simpleList);

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentUserTaskCtrl,
  controllerAs: "$ctrl",
  bindings: {
    panel: "="
  }
}).name;

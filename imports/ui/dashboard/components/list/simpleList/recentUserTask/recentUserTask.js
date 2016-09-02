import template from './recentUserTask.html';
var name, recentUserTaskCtrl;

name = 'recentUserTask';

recentUserTaskCtrl = (function() {
  function recentUserTaskCtrl($reactive, $scope) {
    $reactive(this).attach($scope);
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

})();

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentUserTaskCtrl,
  controllerAs: name
}).name;

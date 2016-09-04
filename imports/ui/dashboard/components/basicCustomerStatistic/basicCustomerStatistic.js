var angular, angularMeteor, basicChart, basicCustomerStatisticCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

basicChart = require('../basicChart/basicChart').basicChart;

import template from './basicCustomerStatistic.html';

basicCustomerStatisticCtrl = (function() {
  function basicCustomerStatisticCtrl($reactive, $scope) {
    'ngInject';
    var config;
    $reactive(this).attach($scope);
    this.data = {
      types: {
        game: 'spline',
        second: 'bar'
      },
      columns: [['game', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250], ['second', 50, 20, 10, 40, 15, 25, 50, 20, 10, 100, 400, 150, 250, 30, 10, 40, 15, 25, 50, 20, 10, 40, 15, 25]],
      colors: {
        game: "#FFD600",
        second: "#0277BD"
      }
    };
    this.axis = {
      x: {
        show: false
      },
      y: {
        show: false
      },
      y2: {
        show: false,
        tick: false
      }
    };
    this.dada = {
      data: this.data,
      axis: this.axis,
      size: {
        height: 50
      },
      legend: {
        show: false
      },
      point: {
        r: 4
      }
    };
    $scope.chart = null;
    $scope.config = {};
    $scope.config.data = [];
    $scope.config.type1 = "spline";
    $scope.config.type2 = "spline";
    $scope.config.keys = {
      "x": "x",
      "value": ["data1", "data2"]
    };
    config = {};
    config.data = {};
    config.data.keys = $scope.config.keys;
    config.data.json = $scope.config.data;
    config.axis = {};
    config.axis.x = {
      "type": "timeseries",
      "tick": {
        "format": "%S"
      }
    };
    config.axis.y = {
      "label": {
        "text": "Number of items",
        "position": "outer-middle"
      }
    };
    config.data.types = {
      "data1": $scope.config.type1,
      "data2": $scope.config.type2
    };
    this.config = {
      data: {
        columns: [['Segment 1', 40], ['Segment 2', 120]]
      },
      type: 'donut'
    };
  }

  return basicCustomerStatisticCtrl;

})();

name = 'basicCustomerStatistic';

exports.basicCustomerStatistic = angular.module(name, [angularMeteor, basicChart]).component(name, {
  template: template,
  controller: basicCustomerStatisticCtrl,
  controllerAs: name
}).name;

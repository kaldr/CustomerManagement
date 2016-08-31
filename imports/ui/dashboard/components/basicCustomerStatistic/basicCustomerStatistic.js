var angular, angularMeteor, basicCustomerStatisticCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

require('c3-angularjs');

import template from './basicCustomerStatistic.html';

basicCustomerStatisticCtrl = (function() {
  function basicCustomerStatisticCtrl($reactive, $scope) {
    'ngInject';
    var config;
    $reactive(this).attach($scope);
    this.data = {
      bindTo: '#c1',
      columns: [['订单', 30, 200, 100, 400, 150, 250], ['用户数', 50, 20, 10, 40, 15, 25]],
      axes: {
        data2: 'y2'
      }
    };
    this.axis = {
      y2: {
        show: true
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
    config.bindto = '#chart';
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
    this.chart = c3.generate(config);
  }

  return basicCustomerStatisticCtrl;

})();

name = 'basicCustomerStatistic';

exports.basicCustomerStatistic = angular.module(name, [angularMeteor, 'c3-angularjs']).component(name, {
  template: template,
  controller: basicCustomerStatisticCtrl,
  controllerAs: name
}).name;

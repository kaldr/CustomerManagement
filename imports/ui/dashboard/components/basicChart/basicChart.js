var angular, basicChartCtrl, name;

angular = require('angular');

basicChartCtrl = (function() {
  function basicChartCtrl($scope, $reactive, $element, $attrs) {
    var chart, config;
    $reactive(this).attach($scope);
    config = this.config;
    chart = c3.generate(config);
    $("#" + this.id).append(chart.element);
  }

  return basicChartCtrl;

})();

name = 'basicChart';

exports[name] = angular.module(name, []).component(name, {
  template: "<div></div>",
  controller: basicChartCtrl,
  controllerAs: name,
  bindings: {
    config: '=',
    id: '@'
  }
}).name;

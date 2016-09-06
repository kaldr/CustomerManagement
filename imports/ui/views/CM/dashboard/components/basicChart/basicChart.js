var angular, basicChartCtrl, name;

angular = require('angular');

name = 'basicChart';

basicChartCtrl = (function() {
  function basicChartCtrl($scope, $reactive, $element, $attrs) {
    var chart, config;
    $reactive(this).attach($scope);
    config = this.config;
    chart = c3.generate(config);
    if (this.component) {
      angular.element("." + this.component + " basic-chart").append(chart.element);
    } else {
      angular.element("#" + this.id).append(chart.element);
    }
  }

  return basicChartCtrl;

})();

exports[name] = angular.module(name, []).component(name, {
  template: "<div></div>",
  controller: basicChartCtrl,
  controllerAs: name,
  bindings: {
    config: '=',
    id: '@',
    component: "="
  }
}).name;

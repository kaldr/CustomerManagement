angular = require 'angular'
name = 'basicChart'
class basicChartCtrl
  constructor: ($scope, $reactive, $element, $attrs) ->
    $reactive this
      .attach $scope
    config = this.config
    chart = c3.generate config
    if this.component
      angular.element "." + this.component+" basic-chart"
        .append chart.element
    else
      angular.element "#" + this.id
        .append chart.element

exports[name] = angular.module name, []
  .component name,
    template: "<div></div>"
    controller: basicChartCtrl
    controllerAs: name
    bindings:
      config: '='
      id: '@'
      component: "="
  .name

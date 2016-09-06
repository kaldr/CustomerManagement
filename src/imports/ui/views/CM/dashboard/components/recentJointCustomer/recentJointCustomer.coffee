`import template from './recentJointCustomer.html'`
{chartConfig} = require './config.chart'
name = 'recentJointCustomer'
{simpleList} = require '../simpleList'
class recentJointCustomerCtrl extends simpleList
  constructor: ($reactive, $scope, $window) ->
    config = this.config()
    super name, config, $reactive, $scope, $window
    this.chart = chartConfig
  config: () ->
    title: '顾客'
    chartTitle: "顾客统计"


exports[name] = angular.module name, []
  .component name,
    template: template
    controller: recentJointCustomerCtrl
    controllerAs: '$ctrl'
    bindings:
      panel: "="
      panelmode: "="
  .name

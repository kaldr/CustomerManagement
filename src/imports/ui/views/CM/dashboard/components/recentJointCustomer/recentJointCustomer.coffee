name = 'recentJointCustomer'
{chartConfig} = require './config.chart'
{expandablePanel, template} = require '/imports/ui/layout/panel/expandablePanel/expandablePanel'

class recentJointCustomerCtrl extends expandablePanel
  constructor: ($reactive, $scope, $window) ->
    config = this.config()
    super name, config, $reactive, $scope, $window
    this.chart = chartConfig.basicChart
    template = this.template
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

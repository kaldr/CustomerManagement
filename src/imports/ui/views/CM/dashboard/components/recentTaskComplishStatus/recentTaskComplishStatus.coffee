
name = 'recentTaskComplishStatus'

{expandablePanel, template} = require '/imports/ui/layout/panel/expandablePanel/expandablePanel'
{chartConfig} = require './config.chart'

class recentTaskComplishStatusCtrl extends expandablePanel
  closeList: (element) ->
    showRecentTaskComplishStatus = false
  config: () ->
    title: "任务"
  constructor: ($reactive, $scope, $window) ->
    config = this.config()
    super name, config, $reactive, $scope, $window
    $reactive this
      .attach $scope
    this.tasks =
      finished:
        total: 210
        month: 60
        week: 21
        today: 1
      waiting:
        total: 20
        month: 0
        week: 18
        today: 5
      started:
        total: 18
        month: 8
        week: 12
        today: 3
    this.complishRate = 85.2
    this.chart = chartConfig

exports[name] = angular.module name, []
  .component name,
    template: template
    controller: recentTaskComplishStatusCtrl
    controllerAs: '$ctrl'
    bindings:
      panel: "="
      panelmode: "="
  .name

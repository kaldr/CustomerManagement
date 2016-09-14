
name = 'recentTaskComplishStatus'

{expandablePanel, template} = require '/imports/ui/layout/panel/expandablePanel/expandablePanel'
{chartConfig} = require './config.chart'
{filter} = require './config.filter'
{menu} = require './config.menu'

class recentTaskComplishStatusCtrl extends expandablePanel
  closeList: (element) ->
    showRecentTaskComplishStatus = false
  config: () =>
    title: "任务"
    filter: filter
    menu: menu(this)
  constructor: ($reactive, $scope, $window, $element) ->
    config = this.config()
    super name, config, $reactive, $scope, $window, $element
    # input = $ "input"
    #   .get()
    # # console.log $ 'input.demo-header-searchbox'
    # # $ 'input'
    # #   .bind 'keydown', (ev) ->
    # #     console.log ev
    # #     ev.stopPropagation()
    # console.log input
    # input.on 'keydown', (ev) ->
    #     console.log ev
    #     ev.stopPropagation()
    #     console.log "here"
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
    this.chart = chartConfig.basicChart

exports[name] = angular.module name, []
  .component name,
    template: template
    controller: recentTaskComplishStatusCtrl
    controllerAs: '$ctrl'
    bindings:
      panel: "="
      panelmode: "="
  .name

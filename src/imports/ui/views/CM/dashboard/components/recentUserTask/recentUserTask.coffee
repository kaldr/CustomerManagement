#template
{expandablePanel, template} = require '/imports/ui/layout/panel/expandablePanel/expandablePanel'
#config
{chartConfig} = require './config.chart'
name = 'recentUserTask'

class recentUserTaskCtrl extends expandablePanel
    config: () ->
      title: "动态"
      color: "grey"
      chartTitle: "今日操作统计"
    constructor: ($reactive, $scope, $window) ->
        super name, this.config(), $reactive, $scope, $window
        this.chart = chartConfig
    showMenu: ($mdOpenMenu, ev) ->
        originatorEv = ev;
        $mdOpenMenu ev

exports[name] = angular.module name, []
    .component name,
        template: template
        controller: recentUserTaskCtrl
        controllerAs: "$ctrl"
        bindings:
            panel: "="
            panelmode: "="
    .name

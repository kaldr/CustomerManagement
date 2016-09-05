#template
`import template from './recentUserTask.html'`
{simpleList} = require '../simpleList'
#config
{chartConfig} = require './config.chart'
name = 'recentUserTask'

class recentUserTaskCtrl extends simpleList
    config: () ->
      title: "动态"
      color: "grey"
      chartTitle: "今日操作统计"
    constructor: ($reactive, $scope) ->
        super $reactive, $scope, name, this.config()
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

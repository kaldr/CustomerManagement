`import template from './recentTaskComplishStatus.html'`
name = 'recentTaskComplishStatus'
{simpleList} = require '../simpleList'
class recentTaskComplishStatusCtrl extends simpleList
  closeList: (element) ->
    showRecentTaskComplishStatus = false
  config: () ->
    title: "任务"
  constructor: ($reactive, $scope) ->
    config = this.config()
    super $reactive, $scope, name, config
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
        week: 2
        today: 3
    this.complishRate = 85.2
    this.chart =
      size:
        height: 200
      data:
        columns: [
          ['data', this.complishRate]
        ]
        type: 'gauge'
      color:
        pattern: ['#0277BD','#0288D1', "#039BE5","#03A9F4"]
exports[name] = angular.module name, []
  .component name,
    template: template
    controller: recentTaskComplishStatusCtrl
    controllerAs: '$ctrl'
    bindings:
      panel: "="
  .name

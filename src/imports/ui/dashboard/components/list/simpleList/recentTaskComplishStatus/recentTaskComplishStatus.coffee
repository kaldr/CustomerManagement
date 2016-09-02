`import template from './recentTaskComplishStatus.html'`
name = 'recentTaskComplishStatus'

class recentTaskComplishStatusCtrl
  closeList: (element) ->
    showRecentTaskComplishStatus = false

  constructor: ($reactive, $scope) ->
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
    controllerAs: name
  .name

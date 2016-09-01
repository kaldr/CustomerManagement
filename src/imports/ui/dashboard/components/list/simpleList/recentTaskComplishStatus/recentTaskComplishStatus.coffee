`import template from './recentTaskComplishStatus.html'`
name = 'recentTaskComplishStatus'

class recentTaskComplishStatusCtrl
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
        columns: [['data', this.complishRate, 3, 5, 1]]
        type: 'gauge'
      color:
        pattern: ['#FB8C00','#FF9800', "#FFA726","#FFB74D"]
exports[name] = angular.module name, []
  .component name,
    template: template
    controller: recentTaskComplishStatusCtrl
    controllerAs: name
  .name

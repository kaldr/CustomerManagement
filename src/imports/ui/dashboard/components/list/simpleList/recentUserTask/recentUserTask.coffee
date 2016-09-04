`import template from './recentUserTask.html'`
name = 'recentUserTask'
{simpleList} = require '../simpleList'
class recentUserTaskCtrl extends simpleList
    config: () ->
      title: "动态"
      color: "grey"
      chartTitle: "今日操作统计"
    constructor: ($reactive, $scope) ->
        super $reactive, $scope, name, this.config()
        this.chart = this.constructChart()
    showMenu: ($mdOpenMenu, ev) ->
        originatorEv = ev;
        $mdOpenMenu ev

    constructChart: () ->
        data:
            columns: [
                ['本周操作', 24, 30, 13, 40, 12]
                ['今日操作', 12, 3, 8, 5, 6]
            ]
            colors:
                '今日操作':'#0277BD'
                '本周操作':'#ccc'
            types:
                '今日操作':'bar'
                '本周操作':'area-spline'
        legend:
            show: false

        axis:
            rotated: true
            x:
                type: 'category'
                tick:
                    outer: false
                categories: ['朱晓丽','邓超','王宝强','林允儿','金泰妍']
            y:
                show: false
        size:
            height: 166
            width: 400

exports[name] = angular.module name, []
    .component name,
        template: template
        controller: recentUserTaskCtrl
        controllerAs: "$ctrl"
        bindings:
            panel: "="
    .name

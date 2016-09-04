angular = require 'angular'
angularMeteor = require 'angular-meteor'
ngAnimate = require 'angular-animate'
`
import template from './mainDashboard.html'
`
{basicCustomerData} = require '../components/basicCustomerData/basicCustomerData'
{basicCustomerStatistic} = require '../components/basicCustomerStatistic/basicCustomerStatistic'
{recentJointCustomer} = require '../components/list/simpleList/recentJointCustomer/recentJointCustomer'
{recentTaskComplishStatus} = require '../components/list/simpleList/recentTaskComplishStatus/recentTaskComplishStatus'
{recentUserTask} = require '../components/list/simpleList/recentUserTask/recentUserTask'

class mainDashboardCtrl

  constructor: ($reactive, $scope) ->
    $reactive this
      .attach $scope
    this.panelStatus =
      recentTaskComplishStatus:
        name: "任务面板"
        status: 'list'
        show: true
      recentUserTask:
        name: "动态面板"
        status: 'list'
        show: true
      recentJointCustomer:
        status: 'list'
        name: "顾客面板"
        show: true
      basicCustomerData:
        status: "list"
        show: true
        name: "数据看板"
      basicCustomerStatistic:
        status: "list"
        name: "会员统计"
        show: true


name = 'mainDashboard'
exports.MainDashboard = angular.module name, [
    angularMeteor
    ngAnimate
    basicCustomerData
    basicCustomerStatistic
    recentJointCustomer
    recentTaskComplishStatus
    recentUserTask
]
    .component name, {
        template: template
        controllerAs: name
        controller: mainDashboardCtrl
    }
    .name

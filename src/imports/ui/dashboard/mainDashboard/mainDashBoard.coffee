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
  closeList: ($element) ->
    console.log $element

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

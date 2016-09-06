`import template from './mainDashboard.html'`
angular = require 'angular'
angularMeteor = require 'angular-meteor'
ngAnimate = require 'angular-animate'
{mainDashboardConfig} = require './config.view'
{basicCustomerData} = require '../components/basicCustomerData/basicCustomerData'
{basicCustomerStatistic} = require '../components/basicCustomerStatistic/basicCustomerStatistic'
{recentJointCustomer} = require '../components/list/simpleList/recentJointCustomer/recentJointCustomer'
{recentTaskComplishStatus} = require '../components/list/simpleList/recentTaskComplishStatus/recentTaskComplishStatus'
{recentUserTask} = require '../components/list/simpleList/recentUserTask/recentUserTask'
{expandablePanelWithStatistic} = require '../../../../layout/page/dashboard/expandablePanelWithStatistic'

name = 'mainDashboard'

class mainDashboardCtrl extends expandablePanelWithStatistic

  #constructor
  constructor: ($reactive, $scope) ->
    this.panelStatus = mainDashboardConfig.panel
    this.topPanelStatus = mainDashboardConfig.toppanel
    this.panelmode = 'list'
    this.allPanelsShownButton =
      status: true
      disable: true
    super name, {} , $reactive, $scope


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

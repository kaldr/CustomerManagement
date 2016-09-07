`import template from './mainDashboard.html'`
angular = require 'angular'
angularMeteor = require 'angular-meteor'
{mainDashboardConfig} = require './config.view'
{basicCustomerData} = require '../components/basicCustomerData/basicCustomerData'
{basicCustomerStatistic} = require '../components/basicCustomerStatistic/basicCustomerStatistic'
{recentJointCustomer} = require '../components/recentJointCustomer/recentJointCustomer'
{recentTaskComplishStatus} = require '../components/recentTaskComplishStatus/recentTaskComplishStatus'
{recentUserTask} = require '../components/recentUserTask/recentUserTask'
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

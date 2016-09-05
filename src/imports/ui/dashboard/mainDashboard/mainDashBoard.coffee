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


class mainDashboardCtrl
  #open all the panels
  openAllPanels: () =>
    if this.allPanelsShownButton.status
      for panelName, panel of this.panelStatus
        panel.show = true
    this.allPanelsShownButton.disable = true
  #切换面板状态
  changePanelStatus: (panels, panelItem) =>
    #设置全部打开按钮
    setAllPanelsShownSwitch = () =>
      allshow = true
      for panelName, panel of panels
        if not panel.show
          allshow = false
          break
      this.allPanelsShownButton.status = if allshow then true else false
      this.allPanelsShownButton.disable = if allshow then true else false
    #所有按钮回恢复可点击状态
    restoreAllTheSwithToAvailable = () =>
      for panelName, panel of panels
        panel.disable = false
    #when only one panel left, the last switch on will be disabled
    disableLastAvailableSwitch = () =>
      onNum = 0
      lastPanel = null
      for panelName, panel of panels
        if panels[panelName].show
          lastPanel = panelName
          onNum += 1
      if onNum == 1
        panels[lastPanel].disable = true
        panels[lastPanel].status = 'fullscreen'
        this.panelmode = 'fullscreen'
      else
        this.panelmode = 'list'
    #如果有一个是全屏状态，那么就将其恢复成列表状态
    if panels[panelItem].show
      for panelName, panel of panels
        if panel.status == 'fullscreen'
          panel.status = 'list'
    setAllPanelsShownSwitch()
    restoreAllTheSwithToAvailable()
    disableLastAvailableSwitch()
    this.panelStatus[panelItem].status = if this.panelStatus[panelItem].show then 'list' else 'hidden'

  #constructor
  constructor: ($reactive, $scope) ->
    $reactive this
      .attach $scope
    this.panelStatus = mainDashboardConfig.panel
    this.topPanelStatus = mainDashboardConfig.toppanel
    this.panelmode = 'list'
    this.allPanelsShownButton =
      status: true
      disable: true

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

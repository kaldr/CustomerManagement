angular = require 'angular'
{menuConfig} = require './config.view'

class expandabelPanel
    constructor: (name, config, $reactive, $scope, $window) ->
        $reactive this
            .attach $scope
        this.lastPanelStatus = 'list'
        this.ID = name
        this.theme = {}
        this.menu = menuConfig(this)
        if config then this.configuration(config)
        # angular.element $window
        #   .bind 'resize', () -> this.onResize()
    #尺寸改变
    onResize: () ->
      height = angular.element $window
        .height() - 352
      if not this.panel.basicCustomerData.show
        height += 120
      if not this.panel.basicCustomerStatistic.show
        height += 70
      angular.element '.simpleListContent'
        .height height
      true
    #隐藏面板
    hidePanel: () =>
        this.panel[this.ID].status = 'hidden'
        this.panel[this.ID].show = false
        showCount = 0
        for panelName, panelItem of this.panel
          showCount += 1 if panelItem.show
        if showCount == 1
          this.panelmode == 'fullscreen'
    #最大化面板
    fullScreenPanel: ($location, $anchorScroll) =>
        this.panel[this.ID].status = 'fullscreen'
        this.lastPanelStatus = 'fullscreen'
        this.loadPanelFullScreen()
        this.panelmode = 'fullscreen'
        false
    #显示面板
    showPanel: () =>
        this.panel[name].status = this.lastPanelStatus
    #切换面板到全屏的状态
    loadPanelFullScreen: () =>
        for n, v of this.panel
          if n == this.ID then this.panel[n].disable = true else this.panel[n].disable = false
          if n == this.ID then this.panel[n].status = 'fullscreen' else this.panel[n].status='hidden'
          if n == this.ID then this.panel[n].show = true else this.panel[n].show = false

    #配置
    configuration: (config) =>
      #界面与主题配置
      themeConfig = () =>
        this.theme.toolbarColor = if config.color == 'grey' then 'grey-200' else 'grey-100'
        this.theme.listColor = if config.color == 'grey' then 'grey-100' else 'grey-A100'
        this.theme.title = if config.title then config.title else '列表'
        this.theme.chartTitle = if config.chartTitle then config.chartTitle else '统计'
      themeConfig()

exports.expandabelPanel = expandabelPanel

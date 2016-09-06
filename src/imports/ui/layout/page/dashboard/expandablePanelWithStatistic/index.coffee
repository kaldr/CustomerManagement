class expandablePanelWithStatistic
  constructor: (name, config, $reactive, $scope) ->
    $reactive this
      .attach $scope
    if config
      this.configuration config
  #config
  configuration: (config) =>

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

exports.expandablePanelWithStatistic = expandablePanelWithStatistic

class simpleList
    constructor: ($reactive, $scope, name, config) ->
        $reactive this
            .attach $scope
        this.lastPanelStatus = 'list'
        this.ID = name
        this.theme = {}
        this.menu =
          display: [
            {
                name: "fullscreen"
                title: "全屏"
                icon: "visibility"
                target: true
                action: this.fullScreenPanel
            }
            {
                name: 'hidelist'
                title: '隐藏'
                target: false
                icon: 'visibility_off'
                action: this.hidePanel
            }
          ]
          action: []
        console.log config
        if config then this.configuration(config)
    #隐藏面板
    hidePanel: () =>
        this.panel[this.ID] = 'hidden'
    #最大化面板
    fullScreenPanel: () =>
        this.panel[this.ID] = 'fullscreen'
        this.lastPanelStatus = 'fullscreen'
        this.loadPanelFullScreen()
        false
    #显示面板
    showPanel: () =>
        this.panel[name] = this.lastPanelStatus
    #切换面板到全屏的状态
    loadPanelFullScreen: () =>
        for n, v of this.panel
          if n == this.ID then this.panel[n] = 'fullscreen' else this.panel[n]='hidden'

    #配置
    configuration: (config) =>
      #界面与主题配置
      themeConfig = () =>
        this.theme.toolbarColor = if config.color == 'grey' then 'grey-200' else 'grey-100'
        this.theme.listColor = if config.color == 'grey' then 'grey-100' else 'grey-A100'
        this.theme.title = if config.title then config.title else '列表'

      themeConfig()

exports.simpleList = simpleList

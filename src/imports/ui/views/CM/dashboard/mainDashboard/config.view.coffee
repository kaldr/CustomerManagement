exports.mainDashboardConfig =
  panelSettingToolbar:
    display: true
  toppanel:
    basicCustomerData:
      status: "list"#状态
      show: true#是否显示
      name: "数据看板"#名称
      disable: false#是否可以操作
    basicCustomerStatistic:
      status: "list"
      name: "会员统计"
      show: true
      disable: false
  #下方操作面板（数量不限）
  panel:
    recentTaskComplishStatus:
      name: "任务面板"
      status: 'list'
      show: true
      disable: false
    recentUserTask:
      name: "动态面板"
      status: 'list'
      show: true
      disable: false
    recentJointCustomer:
      status: 'list'
      name: "顾客面板"
      show: true
      disable: false

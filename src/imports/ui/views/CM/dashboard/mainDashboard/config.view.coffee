exports.mainDashboardConfig =
  panelSettingToolbar:
    display: true
  toppanel:
    basicCustomerStatistic:
      status: "list"
      name: "统计"
      show: true
      disable: false
  panel:
    basicCustomerData:
      status: "list"#状态
      show: true#是否显示
      name: "数据"#名称
      disable: false#是否可以操作
    recentTaskComplishStatus:
      name: "任务"
      status: 'list'
      show: true
      disable: false
    recentUserTask:
      name: "动态"
      status: 'list'
      show: true
      disable: false
    recentJointCustomer:
      status: 'list'
      name: "顾客"
      show: true
      disable: false

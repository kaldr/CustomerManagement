exports.mainDashboardConfig = {
  panelSettingToolbar: {
    display: true
  },
  toppanel: {
    basicCustomerData: {
      status: "list",
      show: true,
      name: "客户数据",
      disable: false
    },
    basicCustomerStatistic: {
      status: "list",
      name: "会员统计",
      show: true,
      disable: false
    }
  },
  panel: {
    recentTaskComplishStatus: {
      name: "任务面板",
      status: 'list',
      show: true,
      disable: false
    },
    recentUserTask: {
      name: "动态面板",
      status: 'list',
      show: true,
      disable: false
    },
    recentJointCustomer: {
      status: 'list',
      name: "顾客面板",
      show: true,
      disable: false
    }
  }
};

exports.filter = {
  rightSwitch: {
    onlyMine: {
      name: '仅显示我的任务',
      valueTrue: true,
      valueFalse: false,
      "default": false,
      info: "是否仅显示我的任务"
    },
    onlyStarred: {
      name: '仅显示加星',
      valueTrue: true,
      valueFalse: false,
      "default": false,
      info: "是否仅显示加星条目"
    }
  },
  bottomSelect: {
    assignStatus: {
      label: "分配",
      multiSelect: true,
      placeHolder: "请选择一个或者多个分配状态",
      options: [
        {
          key: '未分配给他人',
          value: "0",
          info: "还没有"
        }, {
          key: "已分配给他人",
          value: "1"
        }
      ]
    },
    finishStatus: {
      label: "进度",
      "default": ['0', '1', '2', '4'],
      placeHolder: "请选择一个完成状态",
      options: [
        {
          key: "未开始",
          value: "0",
          info: "任务还没有开始"
        }, {
          key: "执行中",
          value: "1",
          info: "任务正在执行中"
        }, {
          key: "审核中",
          value: "2",
          info: "任务已提交审核"
        }, {
          key: "已完成",
          value: "3",
          info: "任务已经完成"
        }, {
          key: "调整中",
          value: "4",
          info: "未通过审核，需要调整"
        }
      ]
    },
    acceptStatus: {
      label: "接收",
      placeHolder: "请选择对方接受状态",
      options: [
        {
          key: "对方未接受",
          value: "0",
          info: "对方尚未接受此任务"
        }, {
          key: "对方已接受",
          value: "1",
          info: "对方已接受此任务"
        }
      ]
    },
    assessment: {
      label: "评分",
      placeHolder: "请选择一个对方的评分",
      options: [
        {
          key: "5分",
          value: 5,
          info: "完美"
        }, {
          key: "4分",
          value: 4,
          info: "优秀"
        }, {
          key: "3分",
          value: 3,
          info: "合格"
        }, {
          key: "2分",
          value: 2,
          info: "不合格"
        }, {
          key: "1分",
          value: 1,
          info: "差"
        }
      ]
    },
    group: {
      label: '分组',
      placeHolder: "请选择分组",
      multiSelect: true,
      options: [
        {
          key: "标书组",
          value: "1",
          info: "负责表述撰写"
        }, {
          key: "客维组",
          value: "2",
          info: "负责客户维护"
        }, {
          key: "产品组",
          value: "3",
          info: "负责产品对接"
        }, {
          key: "客户组",
          value: "4",
          info: "负责线下拜访顾客"
        }
      ]
    },
    department: {
      label: '部门',
      placeHolder: "请选择部门",
      input: true,
      multiSelect: true,
      options: [
        {
          key: "MVP部",
          value: "1",
          info: "MVP部，部门负责人朱晓丽"
        }
      ]
    },
    staff: {
      label: "职员",
      placeHolder: "请选择职员",
      input: true
    }
  },
  input: {
    search: {
      type: 'text',
      label: '输入任何想查询内容',
      icon: 'search',
      placeHolder: ''
    },
    taskFromDate: {
      type: "date"
    }
  }
};

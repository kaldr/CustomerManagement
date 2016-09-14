exports.menu = function(ob) {
  return {
    manageTaskTypes: {
      name: "管理任务类型",
      click: ob.manageTaskTypes,
      icon: "playlist_add",
      showInToolbar: true
    },
    addTask: {
      name: "添加任务",
      click: ob.addTask,
      icon: "alarm_add",
      showInToolbar: true
    },
    exportTask: {
      name: "导出当前筛选的任务",
      click: ob.exportTask,
      icon: "get_app",
      showInToolbar: true
    },
    importTask: {
      name: "导入任务",
      click: ob.importTask,
      icon: "play_for_work",
      showInToolbar: true
    }
  };
};

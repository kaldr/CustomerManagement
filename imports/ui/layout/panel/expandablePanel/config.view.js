exports.menuConfig = function(ob) {
  return {
    display: [
      {
        name: "fullscreen",
        title: "展开",
        icon: "zoom_out_map",
        target: true,
        action: ob.fullScreenPanel,
        disable: false
      }, {
        name: "list",
        title: "收缩",
        target: false,
        icon: 'compare_arrows',
        action: ob.recoverPanel,
        diable: false
      }
    ],
    action: [
      {
        name: "fullscreen",
        title: "展开",
        icon: "zoom_out_map",
        target: true,
        action: ob.fullScreenPanel,
        disable: false
      }, {
        name: "list",
        title: "收缩",
        target: false,
        icon: 'compare_arrows',
        action: ob.recoverPanel,
        diable: false
      }
    ]
  };
};

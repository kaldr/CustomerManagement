exports.menuConfig = function(ob) {
  return {
    display: [
      {
        name: "fullscreen",
        title: "全屏",
        icon: "zoom_out_map",
        target: true,
        action: ob.fullScreenPanel,
        disable: false
      }, {
        name: 'hidden',
        title: '隐藏',
        target: false,
        icon: 'visibility_off',
        action: ob.hidePanel,
        disable: false
      }
    ],
    action: []
  };
};

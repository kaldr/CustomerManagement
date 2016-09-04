var simpleList,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

simpleList = (function() {
  function simpleList($reactive, $scope, name, config) {
    this.configuration = bind(this.configuration, this);
    this.loadPanelFullScreen = bind(this.loadPanelFullScreen, this);
    this.showPanel = bind(this.showPanel, this);
    this.fullScreenPanel = bind(this.fullScreenPanel, this);
    this.hidePanel = bind(this.hidePanel, this);
    $reactive(this).attach($scope);
    this.lastPanelStatus = 'list';
    this.ID = name;
    this.theme = {};
    this.menu = {
      display: [
        {
          name: "fullscreen",
          title: "全屏",
          icon: "visibility",
          target: true,
          action: this.fullScreenPanel
        }, {
          name: 'hidelist',
          title: '隐藏',
          target: false,
          icon: 'visibility_off',
          action: this.hidePanel
        }
      ],
      action: []
    };
    console.log(config);
    if (config) {
      this.configuration(config);
    }
  }

  simpleList.prototype.hidePanel = function() {
    return this.panel[this.ID] = 'hidden';
  };

  simpleList.prototype.fullScreenPanel = function() {
    this.panel[this.ID] = 'fullscreen';
    this.lastPanelStatus = 'fullscreen';
    this.loadPanelFullScreen();
    return false;
  };

  simpleList.prototype.showPanel = function() {
    return this.panel[name] = this.lastPanelStatus;
  };

  simpleList.prototype.loadPanelFullScreen = function() {
    var n, ref, results, v;
    ref = this.panel;
    results = [];
    for (n in ref) {
      v = ref[n];
      if (n === this.ID) {
        results.push(this.panel[n] = 'fullscreen');
      } else {
        results.push(this.panel[n] = 'hidden');
      }
    }
    return results;
  };

  simpleList.prototype.configuration = function(config) {
    var themeConfig;
    themeConfig = (function(_this) {
      return function() {
        _this.theme.toolbarColor = config.color === 'grey' ? 'grey-200' : 'grey-100';
        _this.theme.listColor = config.color === 'grey' ? 'grey-100' : 'grey-A100';
        return _this.theme.title = config.title ? config.title : '列表';
      };
    })(this);
    return themeConfig();
  };

  return simpleList;

})();

exports.simpleList = simpleList;

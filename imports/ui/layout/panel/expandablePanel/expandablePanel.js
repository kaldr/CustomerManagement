import template from './expandablePanel.html';
var angular, expandablePanel, menuConfig,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular = require('angular');

menuConfig = require('./config.view').menuConfig;

expandablePanel = (function() {
  expandablePanel.prototype.fixInputInSelect = function() {
    angular.element('input#gameInput').on('keydown', function(ev) {
      return ev.stopPropagation();
    });
    return false;
  };

  function expandablePanel(name, config, $reactive, $scope, $window, $element) {
    this.configuration = bind(this.configuration, this);
    this.loadPanelFullScreen = bind(this.loadPanelFullScreen, this);
    this.showPanel = bind(this.showPanel, this);
    this.fullScreenPanel = bind(this.fullScreenPanel, this);
    this.hidePanel = bind(this.hidePanel, this);
    this.recoverPanel = bind(this.recoverPanel, this);
    this.clearSearchTerm = bind(this.clearSearchTerm, this);
    this.fixInputInSelect = bind(this.fixInputInSelect, this);
    $reactive(this).attach($scope);
    this.lastPanelStatus = 'list';
    this.ID = name;
    this.theme = {};
    this.menu = menuConfig(this);
    this.searchTerm = '';
    if (config) {
      this.configuration(config);
    }
    this.template = template;
  }

  expandablePanel.prototype.clearSearchTerm = function() {
    return this.searchTerm = '';
  };

  expandablePanel.prototype.onResize = function() {
    var height;
    height = angular.element($window).height() - 352;
    if (!this.panel.basicCustomerData.show) {
      height += 120;
    }
    if (!this.panel.basicCustomerStatistic.show) {
      height += 70;
    }
    angular.element('md-content.expandablePanel').height(height);
    return true;
  };

  expandablePanel.prototype.recoverPanel = function() {
    var panelItem, panelName, ref;
    ref = this.panel;
    for (panelName in ref) {
      panelItem = ref[panelName];
      this.panel[panelName].status = 'list';
      this.panel[panelName].show = true;
    }
    this.panelmode = 'list';
    return false;
  };

  expandablePanel.prototype.hidePanel = function() {
    var panelItem, panelName, ref, showCount;
    this.panel[this.ID].status = 'hidden';
    this.panel[this.ID].show = false;
    showCount = 0;
    ref = this.panel;
    for (panelName in ref) {
      panelItem = ref[panelName];
      if (panelItem.show) {
        showCount += 1;
      }
    }
    if (showCount === 1) {
      return this.panelmode === 'fullscreen';
    }
  };

  expandablePanel.prototype.fullScreenPanel = function($location, $anchorScroll) {
    this.panel[this.ID].status = 'fullscreen';
    this.lastPanelStatus = 'fullscreen';
    this.loadPanelFullScreen();
    this.panelmode = 'fullscreen';
    this.fixInputInSelect();
    return false;
  };

  expandablePanel.prototype.showPanel = function() {
    return this.panel[name].status = this.lastPanelStatus;
  };

  expandablePanel.prototype.loadPanelFullScreen = function() {
    var n, ref, results, v;
    ref = this.panel;
    results = [];
    for (n in ref) {
      v = ref[n];
      if (n === this.ID) {
        this.panel[n].disable = true;
      } else {
        this.panel[n].disable = false;
      }
      if (n === this.ID) {
        this.panel[n].status = 'fullscreen';
      } else {
        this.panel[n].status = 'hidden';
      }
      if (n === this.ID) {
        results.push(this.panel[n].show = true);
      } else {
        results.push(this.panel[n].show = false);
      }
    }
    return results;
  };

  expandablePanel.prototype.configuration = function(config) {
    var filterConfig, menusConfig, themeConfig;
    themeConfig = (function(_this) {
      return function() {
        _this.theme.toolbarColor = config.color === 'grey' ? 'grey-100' : 'grey-50';
        _this.theme.listColor = config.color === 'grey' ? 'grey-50' : 'grey-A100';
        _this.theme.title = config.title ? config.title : '列表';
        return _this.theme.chartTitle = config.chartTitle ? config.chartTitle : '统计';
      };
    })(this);
    filterConfig = (function(_this) {
      return function() {
        if (config.filter) {
          return _this.filters = config.filter;
        }
      };
    })(this);
    menusConfig = (function(_this) {
      return function() {
        if (config.menu) {
          return _this.menus = config.menu;
        }
      };
    })(this);
    themeConfig();
    filterConfig();
    return menusConfig();
  };

  return expandablePanel;

})();

exports.expandablePanel = expandablePanel;

exports.template = template;

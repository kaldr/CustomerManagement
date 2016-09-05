import template from './mainDashboard.html';
var angular, angularMeteor, basicCustomerData, basicCustomerStatistic, mainDashboardConfig, mainDashboardCtrl, name, ngAnimate, recentJointCustomer, recentTaskComplishStatus, recentUserTask,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular = require('angular');

angularMeteor = require('angular-meteor');

ngAnimate = require('angular-animate');

mainDashboardConfig = require('./config.view').mainDashboardConfig;

basicCustomerData = require('../components/basicCustomerData/basicCustomerData').basicCustomerData;

basicCustomerStatistic = require('../components/basicCustomerStatistic/basicCustomerStatistic').basicCustomerStatistic;

recentJointCustomer = require('../components/list/simpleList/recentJointCustomer/recentJointCustomer').recentJointCustomer;

recentTaskComplishStatus = require('../components/list/simpleList/recentTaskComplishStatus/recentTaskComplishStatus').recentTaskComplishStatus;

recentUserTask = require('../components/list/simpleList/recentUserTask/recentUserTask').recentUserTask;

mainDashboardCtrl = (function() {
  mainDashboardCtrl.prototype.openAllPanels = function() {
    var panel, panelName, ref;
    if (this.allPanelsShownButton.status) {
      ref = this.panelStatus;
      for (panelName in ref) {
        panel = ref[panelName];
        panel.show = true;
      }
    }
    return this.allPanelsShownButton.disable = true;
  };

  mainDashboardCtrl.prototype.changePanelStatus = function(panels, panelItem) {
    var disableLastAvailableSwitch, panel, panelName, restoreAllTheSwithToAvailable, setAllPanelsShownSwitch;
    setAllPanelsShownSwitch = (function(_this) {
      return function() {
        var allshow, panel, panelName;
        allshow = true;
        for (panelName in panels) {
          panel = panels[panelName];
          if (!panel.show) {
            allshow = false;
            break;
          }
        }
        _this.allPanelsShownButton.status = allshow ? true : false;
        return _this.allPanelsShownButton.disable = allshow ? true : false;
      };
    })(this);
    restoreAllTheSwithToAvailable = (function(_this) {
      return function() {
        var panel, panelName, results;
        results = [];
        for (panelName in panels) {
          panel = panels[panelName];
          results.push(panel.disable = false);
        }
        return results;
      };
    })(this);
    disableLastAvailableSwitch = (function(_this) {
      return function() {
        var lastPanel, onNum, panel, panelName;
        onNum = 0;
        lastPanel = null;
        for (panelName in panels) {
          panel = panels[panelName];
          if (panels[panelName].show) {
            lastPanel = panelName;
            onNum += 1;
          }
        }
        if (onNum === 1) {
          panels[lastPanel].disable = true;
          panels[lastPanel].status = 'fullscreen';
          return _this.panelmode = 'fullscreen';
        } else {
          return _this.panelmode = 'list';
        }
      };
    })(this);
    if (panels[panelItem].show) {
      for (panelName in panels) {
        panel = panels[panelName];
        if (panel.status === 'fullscreen') {
          panel.status = 'list';
        }
      }
    }
    setAllPanelsShownSwitch();
    restoreAllTheSwithToAvailable();
    disableLastAvailableSwitch();
    return this.panelStatus[panelItem].status = this.panelStatus[panelItem].show ? 'list' : 'hidden';
  };

  function mainDashboardCtrl($reactive, $scope) {
    this.changePanelStatus = bind(this.changePanelStatus, this);
    this.openAllPanels = bind(this.openAllPanels, this);
    $reactive(this).attach($scope);
    this.panelStatus = mainDashboardConfig.panel;
    this.topPanelStatus = mainDashboardConfig.toppanel;
    this.panelmode = 'list';
    this.allPanelsShownButton = {
      status: true,
      disable: true
    };
  }

  return mainDashboardCtrl;

})();

name = 'mainDashboard';

exports.MainDashboard = angular.module(name, [angularMeteor, ngAnimate, basicCustomerData, basicCustomerStatistic, recentJointCustomer, recentTaskComplishStatus, recentUserTask]).component(name, {
  template: template,
  controllerAs: name,
  controller: mainDashboardCtrl
}).name;

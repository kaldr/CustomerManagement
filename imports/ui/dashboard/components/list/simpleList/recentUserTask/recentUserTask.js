import template from './recentUserTask.html';
var name, recentUserTaskCtrl;

name = 'recentUserTask';

recentUserTaskCtrl = (function() {
  function recentUserTaskCtrl() {}

  return recentUserTaskCtrl;

})();

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentUserTaskCtrl,
  controllerAs: name
}).name;

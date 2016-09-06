var OperationListCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

import template from './operationList.html';

OperationListCtrl = (function() {
  function OperationListCtrl() {}

  return OperationListCtrl;

})();

name = "operationList";

exports.OperationList = angular.module(name, [angularMeteor]).component(name, {
  template: template,
  controller: OperationListCtrl,
  controllerAs: name
}).name;

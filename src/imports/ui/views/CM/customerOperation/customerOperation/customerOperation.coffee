angular = require 'angular'
angularMeteor = require 'angular-meteor'
`import template from './operationList.html'`
class OperationListCtrl

name = "operationList"
exports.OperationList = angular.module name, [
  angularMeteor
]
  .component name, {
    template: template
    controller: OperationListCtrl
    controllerAs: name
  }
  .name

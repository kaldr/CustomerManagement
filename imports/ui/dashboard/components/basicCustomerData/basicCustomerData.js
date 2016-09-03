import template from './basicCustomerData.html';
var basicCustomerDataCtrl, name;

name = 'basicCustomerData';

basicCustomerDataCtrl = (function() {
  function basicCustomerDataCtrl($reactive, $scope) {
    'ngInject';
    $reactive(this).attach($scope);
    this.fa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  return basicCustomerDataCtrl;

})();

exports.basicCustomerData = angular.module(name, []).component(name, {
  template: template,
  controllerAs: name,
  controller: basicCustomerDataCtrl
}).name;

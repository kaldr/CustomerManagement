var angular, angularMeteor, basicCustomerDataCtrl, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

import template from './basicCustomerData.html';

name = 'basicCustomerData';

basicCustomerDataCtrl = (function() {
  function basicCustomerDataCtrl($reactive, $scope) {
    'ngInject';
    $reactive(this).attach($scope);
    this.fa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  return basicCustomerDataCtrl;

})();

exports[name] = angular.module(name, [angularMeteor]).component(name, {
  template: template,
  controllerAs: name,
  controller: basicCustomerDataCtrl
}).name;

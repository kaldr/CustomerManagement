var CustomerProfileCtrl, angular, angularMeteor, name;

angular = require('angular');

angularMeteor = require('angular-meteor');

import template from './customerProfile.html';

CustomerProfileCtrl = (function() {
  function CustomerProfileCtrl() {}

  return CustomerProfileCtrl;

})();

name = "customerProfile";

exports.CustomerProfile = angular.module(name, [angularMeteor]).component(name, {
  template: template,
  controller: CustomerProfileCtrl,
  controllerAs: name
}).name;

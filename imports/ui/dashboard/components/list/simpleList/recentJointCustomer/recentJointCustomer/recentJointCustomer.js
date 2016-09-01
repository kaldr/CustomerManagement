import template from './recentJointCustomer.html';
var name, recentJointCustomerCtrl;

name = 'recentJointCustomer';

recentJointCustomerCtrl = (function() {
  function recentJointCustomerCtrl() {}

  return recentJointCustomerCtrl;

})();

exports[name] = angular.module(name, []).component(name, {
  template: template,
  controller: recentJointCustomerCtrl,
  controllerAs: name
}).name;

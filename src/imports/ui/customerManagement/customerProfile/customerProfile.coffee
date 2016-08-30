angular=require 'angular'
angularMeteor=require 'angular-meteor'
`import template from './customerProfile.html'`

class CustomerProfileCtrl

name="customerProfile"
exports.CustomerProfile=angular.module name,[
  angularMeteor
]
  .component name,{
    template:template
    controller:CustomerProfileCtrl
    controllerAs:name
  }
  .name

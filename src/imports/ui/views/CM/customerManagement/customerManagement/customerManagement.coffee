angular = require 'angular'
angularMeteor = require 'angular-meteor'
uiRouter = require 'angular-ui-router'
{CustomerProfile} = require '../customerProfile/customerProfile'
`import template from './customerManagement.html'`

class customerManagementCtrl
  constructor: ($state) ->
    'ngInject'

config = ($stateProvider, $urlRouterProvider) ->
  'ngInject'
  'use strict'
  $urlRouterProvider.when 'customerManagement','customerManagement.customerProfile'
  $stateProvider
    .state 'customerManagement.index',
      url: '/index'
      views:
          customerManagement:
            template: '<customer-profile></customer-profile>'
      #parent:'customerManagement'

    .state 'customerManagement.customerProfile',
      url: ''
      views:
          customerManagement:
            template: '<customer-profile></customer-profile>'
      #parent:'customerManagement'



name = 'customerManagement'
exports.customerManagement = angular.module name, [
  angularMeteor
  uiRouter
  CustomerProfile
]
  .component name, {
    template: template
    controller: customerManagementCtrl
    controllerAs: name
  }
  .config config
  .name

#basic modules
angular=require 'angular'
angularMeteor=require 'angular-meteor'
ngMaterial=require 'angular-material'
uiRouter=require "angular-ui-router"
#CM modules
{MainDashboard}=require "../dashboard/mainDashboard/mainDashboard"
#basic html template
`import template from './CM.html'`
#class
class CMCtrl
  'ngInject'


#config
config=($stateProvider,$locationProvider,$urlRouterProvider)->
  'ngInject'
  $locationProvider.html5Mode true

  #States
  $stateProvider
    .state 'mainDashboard',
      url:'/mainDashboard'
      template:'<main-dashboard></main-dashboard>'
    .state "customerManagement",
      url:"/customerManagement"
      template:'<customer-management></customer-management>'
    .state "customerOperation",
      url:"/customerOperation"
      template:'<customer-operation></customer-operation>'

#run



#module exports
name='cm'
exports.cm=angular.module name,[
  angularMeteor
  ngMaterial
  uiRouter
  MainDashboard
]
  .component name,{
    template:template
    controllerAs:name
    controller:CMCtrl
  }
  .config config
  .name

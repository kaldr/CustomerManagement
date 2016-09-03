#basic modules
angular = require 'angular'
angularMeteor = require 'angular-meteor'
ngMaterial = require 'angular-material'
uiRouter = require "angular-ui-router"

#CM modules
{MainDashboard} = require "../dashboard/mainDashboard/mainDashboard"
{customerManagement} = require '../customerManagement/customerManagement/customerManagement'

#basic html template
`import template from './CM.html'`
#class=====================================================================
class CMCtrl
    constructor: ($reactive, $scope, $state, $location) ->
        $reactive this
            .attach $scope
        this.currentNavItem = $location.path().split("/")[1]
        this.currentNavItem = 'mainDashboard'if ! this.currentNavItem
        #$state.transitionTo this.currentNavItem
        this.navigation =
            mainDashboard:
                name: '看板'
                tooltip: "信息看板"
                iconClass: 'fa-tachometer'


            'customerManagement.customerProfile': #注意，这个state在customerManagement.coffee里面定义的
                name: '客户管理'
                tooltip: "管理客户档案与分配"
                iconClass: 'fa-users'
            customerOperation:
                name: "客户维护"
                tooltip: "回访、礼品和活动等多种维护方式"
                iconClass: 'fa-heartbeat'
        #page title
        this.title = '客户关系管理'
        this.famous()
    famous: () ->
      famous = require 'famous'
      Engine = famous.core.Engine
      modifier = new famous.modifiers.StateModifier
        size: [undefined, 500]
      context = Engine.createContext document.getElementById "famous"
      console.log context
      colors = ['rgba(256,0,0,.7)','rgba(0,256,0,.7)','rgba(0,0,256,0.7)']

      ratios = [1, 3, 5]
      console.log "ratio ok"
      layout = new famous.views.FlexibleLayout
        ratios: ratios
        transition:
          curve: 'easeInOut'
          duration: 1000
      console.log 'layout ok'
      createSurface = (i) ->
        new famous.core.Surface
          size: [undefined, undefined]
          properties:
            backgroundColor: colors[i % 3]
      surfaces = (createSurface i for i in [0..ratios.length - 1])
      layout.sequenceFrom surfaces
      context
        .add modifier
        .add layout


#config=====================================================================
config = ($stateProvider, $locationProvider, $urlRouterProvider) ->
    'ngInject'
    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise '/mainDashboard'
    #States
    $stateProvider
        .state 'mainDashboard',
            url: '/mainDashboard'
            views:
                'cm@':
                    template: '<main-dashboard id="mainDashboard" layout-fill layout="column"></main-dashboard>'

        .state "customerManagement",
            abstract: true
            url: "/customerManagement"
            views:
                "cm@":
                    template: '<customer-management></customer-management>'

        .state "customerOperation",
            url: "/customerOperation"
            views:
                "cm@":
                    template: '<customer-operation></customer-operation>'


#run=====================================================================
run = ($state, $rootScope) ->
    'ngInject'
    'use strict'
    $rootScope.$on '$stateChangeSuccess', (event, current) ->
        $rootScope.currentNavItem = $state.current.name
    $rootScope.$on '$stateChangeStart', () =>
      $animate.enabled false

#module exports
name = 'cm'
exports.cm = angular.module name, [
    angularMeteor
    ngMaterial
    uiRouter
    MainDashboard
    customerManagement
]
    .config config
    #.run run
    .component name, {
        template: template
        controllerAs: name
        controller: CMCtrl
    }
    .name

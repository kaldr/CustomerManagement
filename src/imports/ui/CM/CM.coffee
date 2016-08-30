#basic modules
angular=require 'angular'
angularMeteor=require 'angular-meteor'
ngMaterial=require 'angular-material'
uiRouter=require "angular-ui-router"
#CM modules
{MainDashboard}=require "../dashboard/mainDashboard/mainDashboard"
{customerManagement}=require '../customerManagement/customerManagement/customerManagement'

#basic html template
`import template from './CM.html'`
#class=====================================================================
class CMCtrl
    constructor:($reactive,$scope,$state,$location)->
        'ngInject'
        $reactive this
            .attach $scope
        this.currentNavItem=$location.path().split("/")[1]
        this.currentNavItem='mainDashboard'if !this.currentNavItem
        #$state.transitionTo this.currentNavItem
        this.navigation=
            mainDashboard:
                name:'首页'
                tooltip:"信息看板"
                iconClass:'fa-home'
            'customerManagement.customerProfile':#注意，这个state在customerManagement.coffee里面定义的
                name:'客户管理'
                tooltip:"管理客户档案与分配"
                iconClass:'fa-users'
            customerOperation:
                name:"客户维护"
                tooltip:"回访、礼品和活动等多种维护方式"
                iconClass:'fa-heartbeat'
        #page title
        this.title='客户关系管理'

#config=====================================================================
config=($stateProvider,$locationProvider,$urlRouterProvider)->
    'ngInject'
    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise '/mainDashboard'
    #States
    $stateProvider
        .state 'mainDashboard',
            url:'/mainDashboard'
            views:
                CM:
                    template:'<main-dashboard></main-dashboard>'

        .state "customerManagement",
            abstract:true
            url:"/customerManagement"
            views:
                CM:
                    template:'<customer-management></customer-management>'

        .state "customerOperation",
            url:"/customerOperation"
            views:
                CM:
                    template:'<customer-operation></customer-operation>'


#run=====================================================================
run=($state,$rootScope)->
    'ngInject'
    'use strict'
    $rootScope.$on '$stateChangeSuccess',(event,current)->
        $rootScope.currentNavItem=$state.current.name


#module exports
name='cm'
exports.cm=angular.module name,[
    angularMeteor
    ngMaterial
    uiRouter
    MainDashboard
    customerManagement
]
    .config config
    #.run run
    .component name,{
        template:template
        controllerAs:name
        controller:CMCtrl
    }
    .name

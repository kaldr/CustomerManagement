angular=require 'angular'
angularMeteor=require 'angular-meteor'
angularMaterial=require 'angular-material'

`
import template from './mainDashboard.html'
`

class mainDashboardCtrl


name='mainDashboard'
exports.MainDashboard=angular.module name,[angularMeteor,angularMaterial]
    .component name,{
      template:template
      controllerAs:name
      controller:mainDashboardCtrl
    }
    .name

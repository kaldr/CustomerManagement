angular=require 'angular'
angularMeteor=require 'angular-meteor'
#angularMaterial=require 'angular-material'

`
import template from './mainDashboard.html'
`
{basicCustomerData}=require '../components/basicCustomerData/basicCustomerData'

class mainDashboardCtrl


name='mainDashboard'
exports.MainDashboard=angular.module name,[
    angularMeteor
    #angularMaterial
    basicCustomerData
]
    .component name,{
        template:template
        controllerAs:name
        controller:mainDashboardCtrl
    }
    .name

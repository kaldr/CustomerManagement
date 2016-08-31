angular=require 'angular'
angularMeteor=require 'angular-meteor'
`
import template from './mainDashboard.html'
`
{basicCustomerData}=require '../components/basicCustomerData/basicCustomerData'
{basicCustomerStatistic}=require '../components/basicCustomerStatistic/basicCustomerStatistic'

class mainDashboardCtrl


name='mainDashboard'
exports.MainDashboard=angular.module name,[
    angularMeteor
    basicCustomerData
    basicCustomerStatistic
]
    .component name,{
        template:template
        controllerAs:name
        controller:mainDashboardCtrl
    }
    .name

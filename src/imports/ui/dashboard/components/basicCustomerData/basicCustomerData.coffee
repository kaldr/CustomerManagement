angular = require 'angular'
angularMeteor = require 'angular-meteor'
`import template from './basicCustomerData.html'`

name = 'basicCustomerData'

class basicCustomerDataCtrl
    constructor: ($reactive, $scope) ->
        'ngInject'
        $reactive this
            .attach $scope
        this.fa = [1..10]

exports[name] = angular.module name, [
    angularMeteor
]
    .component name,
        template: template
        controllerAs: name
        controller: basicCustomerDataCtrl
    .name

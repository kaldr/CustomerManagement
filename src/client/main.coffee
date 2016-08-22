angular=require 'angular'
angularMeteor=require 'angular-meteor'
{AccessLog}=require '../imports/api/collections/customer'

class gameController
  constructor:($scope,$reactive)->
    'ngInject'
    $reactive this
      .attach $scope
    this.helpers {
      logs:()->
        console.log AccessLog.find {},{limit:10,sort:{_id:-1}}
        AccessLog.find {},{limit:10}
    }


angular.module 'game',[angularMeteor]
  .controller 'gameController',gameController

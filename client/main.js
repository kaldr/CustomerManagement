var AccessLog, angular, angularMeteor, gameController;

angular = require('angular');

angularMeteor = require('angular-meteor');

AccessLog = require('../imports/api/collections/customer').AccessLog;

gameController = (function() {
  function gameController($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
      logs: function() {
        console.log(AccessLog.find({}, {
          limit: 10,
          sort: {
            _id: -1
          }
        }));
        return AccessLog.find({}, {
          limit: 10
        });
      }
    });
  }

  return gameController;

})();

angular.module('game', [angularMeteor]).controller('gameController', gameController);

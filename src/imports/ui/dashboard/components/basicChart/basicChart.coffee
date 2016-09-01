angular=require 'angular'
class basicChartCtrl
  constructor:($scope,$reactive,$element, $attrs)->
    $reactive this
      .attach $scope
    config=this.config
    chart=c3.generate config
    $ "#"+this.id
      .append chart.element

name='basicChart'
exports[name]=angular.module name,[]
  .component name,
    template:"<div></div>"
    controller:basicChartCtrl
    controllerAs:name
    bindings:
      config:'='
      id:'@'
  .name

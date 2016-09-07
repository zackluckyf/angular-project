(function () {
  'use strict';
  angular.module('myApp.typeAhead', [])
    .directive('typeAhead', function () {
      return {
        template: '<input class="player-inputs" ng-model="dc.player1" placeholder="add player " type="text" value="hello">'
      };
    });
})();

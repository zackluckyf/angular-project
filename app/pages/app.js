(function () {
  'use strict';
  angular.module('myApp', ['myApp.data', 'myApp.routes', 'myApp.typeAhead'])
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/yourTeam');
    });
})();

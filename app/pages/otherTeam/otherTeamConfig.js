(function () {
  'use strict';
  angular.module('myApp.otherTeam', ['ui-router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('otherTeam', {
          url: '/otherTeam',
          templateUrl: 'otherTeam.html'
        });
    });
}());

(function () {
  'use strict';

  function otherTeamState ($stateProvider) {
    $stateProvider
      .state('otherTeam', {
        url: '/otherTeam',
        templateUrl: 'app/otherTeam/otherTeam.html'
      });
  }
  otherTeamState.$inject = ['$stateProvider'];

  angular.module('myApp.otherTeam', ['ui.router'])
    .config(otherTeamState);
  require('./otherTeamController');
}());

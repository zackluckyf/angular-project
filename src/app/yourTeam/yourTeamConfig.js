(function () {
  'use strict';

  angular.module('myApp.yourTeam', ['ui.router'])
    .config(yourTeamState);

  yourTeamState.$inject = ['$stateProvider'];

  function yourTeamState ($stateProvider) {
    $stateProvider
      .state('yourTeam', {
        url: '/yourTeam',
        templateUrl: 'app/pages/yourTeam/yourTeam.html'
      });
  }
  require('./yourTeamController');
}());

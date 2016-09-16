(function () {
  'use strict';
  angular.module('myApp.team', [])
    .constant('playerurl', 'http://www.fantasyfootballnerd.com/service/players/json/dr4mykguqpd9/');
  require('./returnTeamFactory');
  require('./addPlayersFactory');
}());

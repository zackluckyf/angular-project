(function () {
  'use strict';
  angular.module('myApp.analyzer')
    .factory('tradeValueFactory', tradeValueFactory);

  function tradeValueFactory () {
    var player = {
      'Adrian Peterson': 4,
      'Antonio Brown': 5,
      'A.J. Green': 3,
      'Carson Palmer': 2,
      'Eli Manning': 1,
      'Phillip Rivers': 1
    };
    var teamValue;

    function calcTeamValue (team) {
      teamValue = 0;
      for (var i = 0; i < team.length; i++) {
        teamValue += team[i].value;
      }
      return teamValue;
    }

    function analyzeTrade (team1, team2) {
      var team1val = calcTeamValue(team1);
      var team2val = calcTeamValue(team2);
      var stringTeam1 = 'Your player value: ' + team1val;
      var stringTeam2 = 'Their player value: ' + team2val;
      var stringAdvice = '';
      if (team1val < team2val) {
        stringAdvice = ' This is a good trade for you!';
      } else if (team1val === team2val) {
        stringAdvice = ' This is a balanced trade!';
      } else if (team1val > team2val) {
        stringAdvice = ' This is a bad trade for you!';
      }
      var advice = [stringTeam1, stringTeam2, stringAdvice];
      return advice;
    }

    return {
      calcTeamValue: calcTeamValue,
      analyzeTrade: analyzeTrade
    };
  }
}());

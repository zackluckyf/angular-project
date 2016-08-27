(function () {
  'use strict';
  angular.module('myApp.data')
    .factory('calculateFactory', calculateFactory);

  function calculateFactory () {
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
    return {
      calcTeamValue: calcTeamValue
    };
  }
}());

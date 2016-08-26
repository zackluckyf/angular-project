(function () {
  'use strict';
  angular.module('myApp.data')
    .factory('dataFactory', dataFactory);

  function dataFactory () {
    function getData (team) {
      if (team === 'team1') {
        return [{name: 'Adrian Peterson', value: 4},
          {name: 'Carson Palmer', value: 2}];
      }else if (team === 'team2') {
        return [{name: 'Antonio Brown', value: 5}];
      }
    }
    return {
      getTeamData: getData
    };
  }
}());

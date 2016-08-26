(function () {
  'use strict';
  angular.module('myApp.data')
    .controller('dataController', DataController);

  function DataController (dataFactory, calculateFactory) {
    this.team1 = dataFactory.getTeamData('team1');
    this.team2 = dataFactory.getTeamData('team2');

    this.title = 'Fantasy Football Trade Analyzer!';

    this.team1Value = calculateFactory.calcTeamValue(this.team1);
    this.team2Value = calculateFactory.calcTeamValue(this.team2);
  }
}());

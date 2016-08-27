(function() {
    'use strict';
    angular.module('myApp.data')
        .controller('dataController', DataController);

    function DataController(dataFactory, calculateFactory, addFactory) {
        this.team1 = dataFactory.getTeamData('team1');
        this.team2 = dataFactory.getTeamData('team2');

        function updateTeam1(player) {
            this.team1.push(addFactory.addPlayer(player));
        }

        function updateTeam2(player) {
            this.team2.push(addFactory.addPlayer(player));
        }


        this.title = 'Fantasy Football Trade Analyzer!';

        this.team1Value = calculateFactory.calcTeamValue(this.team1);
        this.team2Value = calculateFactory.calcTeamValue(this.team2);
    }
}());

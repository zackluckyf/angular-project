(function() {
    'use strict';
    angular.module('myApp.data')
        .controller('dataController', DataController);

    function DataController(dataFactory, calculateFactory, addFactory) {
        this.team1 = dataFactory.getTeamData('team1');
        this.team2 = dataFactory.getTeamData('team2');

        this.updateTeam1 = function(player) {
            if (addFactory.addPlayer(player) && Object.keys(this.team1).length < 5) {
                this.team1.push(addFactory.addPlayer(player));
            }
        };

        this.updateTeam2 = function(player) {
            if (addFactory.addPlayer(player) && Object.keys(this.team2).length < 5) {
                this.team2.push(addFactory.addPlayer(player));
            }
        };

        this.title = 'Fantasy Football Trade Analyzer!';

        this.team1Value = calculateFactory.calcTeamValue(this.team1);
        this.team2Value = calculateFactory.calcTeamValue(this.team2);

        this.tradeAnalysis = function(team1, team2) {
            var team1val = calculateFactory.calcTeamValue(team1);
            var team2val = calculateFactory.calcTeamValue(team2);
            var string = 'Your player value: ' + team1val + '\nTheir player value: ' + team2val + '\n';
            if (team1val > team2val) {
                string += 'This is a good trade for you!';
            } else if (team1val === team2val) {
                string += 'This is a balanced trade!';
            } else if (team1val < team2val) {
                string += 'This is a bad trade for you!';
            }
            window.alert(string);
        };
    }
}());

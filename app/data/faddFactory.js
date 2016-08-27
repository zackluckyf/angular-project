(function() {
    'use strict';
    angular.module('myApp.data')
        .factory('addFactory', addFactory);

    function addFactory() {
        var player = {
            'Adrian Peterson': 4,
            'Antonio Brown': 5,
            'A.J. Green': 3,
            'Carson Palmer': 2,
            'Eli Manning': 1,
            'Phillip Rivers': 1
        };

        function addPlayer(newPlayer) {
            if (player.newPlayer) {
                return newPlayer;
            }
        }

        return {
            addPlayer: addPlayer
        };
    }
}());

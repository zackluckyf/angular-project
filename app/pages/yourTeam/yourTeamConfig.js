(function() {
    'use strict';
    angular.module('myApp.yourTeam', ['ui-router'])
        .config(function($stateProvider) {
            $stateProvider
                .state('yourTeam', {
                    url: '/yourTeam',
                    templateUrl: 'yourTeam.html'
                });
        });
}());

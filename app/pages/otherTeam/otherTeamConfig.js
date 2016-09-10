(function() {
    'use strict';
    angular.module('myApp.otherTeam', ['ui.router', 'myApp.data'])
        .config(function($stateProvider) {
            $stateProvider
                .state('otherTeam', {
                    url: '/otherTeam',
                    templateUrl: 'pages/otherTeam/otherTeam.html'
                });
        });
}());

(function() {
    'use strict';
    angular.module('myApp.yourTeam', ['ui.router', 'myApp.data'])
        .config(function($stateProvider) {
            $stateProvider
                .state('yourTeam', {
                    url: '/yourTeam',
                    templateUrl: 'pages/yourTeam/yourTeam.html'
                });
        });
}());

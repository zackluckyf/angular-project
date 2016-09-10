(function() {
    'use strict';
    angular.module('myApp', ['myApp.data', 'myApp.yourTeam', 'myApp.otherTeam', 'myApp.tradeAnalyzer'])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/yourTeam');
        });
})();

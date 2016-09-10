(function() {
    'use strict';
    angular.module('myApp.tradeAnalyzer', ['ui.router', 'myApp.data'])
        .config(function($stateProvider) {
            $stateProvider
                .state('tradeAnalyzer', {
                    url: '/tradeAnalyzer',
                    templateUrl: 'pages/tradeAnalyzer/tradeAnalyzer.html'
                });
        });
}());

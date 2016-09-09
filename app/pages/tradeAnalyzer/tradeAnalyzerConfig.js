(function() {
    'use strict';
    angular.module('myApp.tradeAnalyzer', ['ui-router'])
        .config(function($stateProvider) {
            $stateProvider
                .state('tradeAnalyzer', {
                    url: '/tradeAnalyzer',
                    templateUrl: 'tradeAnalyzer.html'
                });
        });
}());

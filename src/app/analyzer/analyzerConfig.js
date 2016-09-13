(function () {
  'use strict';

  function tradeAnalyzerState ($stateProvider) {
    $stateProvider
      .state('tradeAnalyzer', {
        url: '/tradeAnalyzer',
        templateUrl: 'app/pages/tradeAnalyzer/tradeAnalyzer.html'
      });
  }

  tradeAnalyzerState.$inject = ['$stateProvider'];
  angular.module('myApp.tradeAnalyzer', ['ui.router'])
    .config(tradeAnalyzerState);
  require('./tradeAnalyzerController');
}());

(function () {
  'use strict';

  function tradeAnalyzerState ($stateProvider) {
    $stateProvider
      .state('tradeAnalyzer', {
        url: '/tradeAnalyzer',
        templateUrl: 'app/analyzer/analyzer.html'
      });
  }
  tradeAnalyzerState.$inject = ['$stateProvider'];
  angular.module('myApp.analyzer', ['ui.router'])
    .config(tradeAnalyzerState);
  require('./analyzerController');
  require('./tradeValueFactory');
}());

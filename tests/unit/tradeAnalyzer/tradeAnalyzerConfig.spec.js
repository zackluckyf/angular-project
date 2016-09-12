describe('Trade Analyzer Config', function() {
    'use strict';
    var $rootScope, $state, $location;

    function digest() {
        $rootScope.$digest();
    }
    beforeEach(module('myApp.tradeAnalyzer'));
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        var $templateCache = $injector.get('$templateCache');
        $templateCache.put('app/pages/tradeAnalyzer/tradeAnalyzer.html', '');
    }));
    it('should respond to tradeAnalyzer URL', function() {
        $state.go('tradeAnalyzer');
        digest();
        expect($state.current.url).toEqual('/tradeAnalyzer');
        expect($location.$$path).toEqual('/tradeAnalyzer');
    });
});

describe('App Config', function() {
    'use strict';
    var $rootScope, $location, SetupFactory;

    function digest() {
        $rootScope.$digest();
    }
    beforeEach(module('myApp'));
    beforeEach(inject(function($injector, _SetupFactory_) {
        SetupFactory = _SetupFactory_;
        $rootScope = $injector.get('$rootScope');
        $location = $injector.get('$location');
        var $templateCache = $injector.get('$templateCache');
        $templateCache.put('app/yourTeam/yourTeam.html', '');
    }));
    it('should respond to incorrect URL', function() {
        $location.url('/tea');
        digest();
        expect($location.$$path).toEqual('/yourTeam');
    });
    it("should be able to change yourTeam and get state", function() {
        SetupFactory.setTeam({
            name: 'yourTeam',
            player: 'Carson Palmer'
        });
        expect(SetupFactory.teamState('yourTeam')).toEqual({
            name: 'yourTeam',
            players: ['Carson Palmer']
        });
    });
    it("should be able to change otherTeam and get state", function() {
        SetupFactory.setTeam({
            name: 'otherTeam',
            player: 'Adrian Peterson'
        });
        expect(SetupFactory.teamState('otherTeam')).toEqual({
            name: 'otherTeam',
            players: ['Adrian Peterson']
        });
    });
});

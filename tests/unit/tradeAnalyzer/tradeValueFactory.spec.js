describe('Trade Value Factory', function() {
    'use strict';
    var tradeValueFactory;

    beforeEach(module('myApp.team', 'myApp.analyzer'));
    beforeEach(inject(function(_tradeValueFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        tradeValueFactory = _tradeValueFactory_;
    }));
    it("should return 28 given Adrian Peterson and Carson Palmer", function() {
        expect(tradeValueFactory.calcTeamValue({
            name: 'YourTeam',
            players: ['Carson Palmer', 'Adrian Peterson']
        })).toEqual(28);
    });
    it("should return 13 given Antonio Brown", function() {
        expect(tradeValueFactory.calcTeamValue({
            name: 'otherTeam',
            players: ['Antonio Brown']
        })).toEqual(13);
    });
});

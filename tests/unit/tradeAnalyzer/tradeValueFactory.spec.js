describe('Trade Value Factory', function() {
    'use strict';
    var tradeValueFactory;

    beforeEach(module('myApp.team', 'myApp.analyzer'));
    beforeEach(inject(function(_tradeValueFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        tradeValueFactory = _tradeValueFactory_;
    }));
    it("should return 6 given [{name: 'Adrian Peterson'}, {name: 'Carson Palmer'}]", function() {
        expect(tradeValueFactory.calcTeamValue([{
            name: 'Adrian Peterson'
        }, {
            name: 'Carson Palmer'
        }])).toEqual(28);
    });
    it("should return 5 given [{name: 'Antonio Brown'}]", function() {
        expect(tradeValueFactory.calcTeamValue([{
            name: 'Antonio Brown'
        }])).toEqual(13);
    });
});

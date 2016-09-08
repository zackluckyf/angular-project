// protractor
var homepage = require('./homepage');
describe('myApp', function() {
    'use strict';
    it('should find "Fantasy Football Trade Analyzer!" inside a heading element', function() {
        expect(homepage.getTitleText()).toEqual('Fantasy Football Trade Analyzer');
    });
    it("should have a player text of Adrian Peterson", function() {
        expect(homepage.getPlayerText()).toEqual('Adrian Peterson');
    });
    it("should remove a player once remove is clicked", function() {
        homepage.clickRemove();
        // removes Adrian Peterson leaving Carson Palmer
        expect(homepage.getPlayerText()).toEqual('Carson Palmer');
    });
    it("should add a player once a player's name is entered", function() {
        homepage.clickRemove();
        // removes Carson Palmer Leaving no one
        homepage.addPlayer();
        // adds Antonio Brown
        expect(homepage.getPlayerText()).toEqual('Antonio Brown');
    });
    it("should navigate through pages and get the results of a trade", function() {
        //two teams should currently be Antonio Brown and Antonio Brown
        homepage.navigate();
        expect(homepage.yourTeamValueText()).toEqual('Your player value: 5');
        expect(homepage.otherTeamValueText()).toEqual('Their player value: 5');
        expect(homepage.tradeValueText()).toEqual('This is a balanced trade!');
    });
});

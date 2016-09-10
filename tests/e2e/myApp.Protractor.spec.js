// protractor
var homepage = require('./homepage');
describe('myApp', function() {
    'use strict';
    it('should have a player text of Adrian Peterson', function() {
        expect(homepage.getPlayerText()).toEqual('Adrian Peterson');
    });
    it('should remove a player once remove is clicked', function() {
        homepage.clickRemove();
        // removes Adrian Peterson leaving Carson Palmer
        expect(homepage.getPlayerText()).toEqual('Carson Palmer');
    });
    it("should add a player once a player's name is entered", function() {
        homepage.clickRemove();
        // removes Carson Palmer Leaving no one
        homepage.addPlayer('Antonio Brown');
        expect(homepage.getPlayerText()).toEqual('Antonio Brown');
    });
    xit('should navigate through pages and get the results of a trade', function() {
        // two teams should currently be Antonio Brown and Antonio Brown
        // without the state of the controllers transferring it doesn't keep state between views/pages
        homepage.navigate();
        expect(homepage.tradeValueText()).toEqual('This is a balanced trade!');
    });
});

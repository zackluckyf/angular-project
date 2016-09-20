// protractor
var homepage = require('./homepage');
describe('myApp', function() {
    'use strict';
    it("should have a your team title on the first page ", function() {
        expect(homepage.titleCheck()).toEqual('Your Team');
    });
    console.log('temporarily disabled until navigation can be brought back');
    xit('should navigate through pages and get the results of a trade', function() {
        expect(homepage.navigate()).toEqual('This is a balanced trade!');
    });
});

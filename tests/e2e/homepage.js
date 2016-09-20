/*jshint esversion: 6 */
var homepage = (function() {
    'use strict';
    browser.get('index.html');

    var teamTitle = element(by.css('.sub-title'));
    var next = element(by.id('next-button'));
    var analyze = element(by.id('analyze'));
    var newTrade = element(by.id('new-trade'));
    var tradeValue = element(by.css('results'));

    var navigate = function() {
        next.click();
        analyze.click();
        newTrade.click();
        return tradeValue.getText();
    };
    var titleCheck = function() {
        return teamTitle.getText();
    };

    return {
        navigate: navigate,
        titleCheck: titleCheck
    };
}());

module.exports = homepage;

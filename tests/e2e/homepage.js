/*jshint esversion: 6 */
var homepage = (function() {
    'use strict';
    browser.get('index.html');
    /*
    TALK TO DANE ABOUT BETTER WAY TO SELECT ELEMENTS, this relies on checking
    for them and then it automatically selects the first since there are multiple
    copies of the same elements
    */
    var title = element(by.id('heading'));
    var remove = element(by.css('.remove'));
    var player = element(by.binding('player.name'));
    var playerInput = element(by.css('.player-inputs'));
    var add = element(by.css('.add'));
    var next = element(by.id('next-button'));
    var analyze = element(by.css('.analyze'));
    var yourTeamValue = element(by.binding('dc.advice[0]'));
    var otherTeamValue = element(by.binding('dc.advice[1]'));
    var tradeValue = element(by.binding('dc.advice[2]'));
    var getTitleText = function() {
        return title.getText();
    };
    var clickRemove = function() {
        remove.click();
    };
    var getPlayerText = function() {
        return player.getText();
    };
    var addPlayer = function() {
        playerInput.sendKeys('Antonio Brown');
        add.click();
    };
    var navigate = function() {
        next.click();
        analyze.click();
    };
    var yourTeamValueText = function() {
        return yourTeamValue.getText();
    };
    var otherTeamValueText = function() {
        return otherTeamValue.getText();
    };
    var tradeValueText = function() {
        return tradeValue.getText();
    };

    return {
        getTitleText: getTitleText,
        getPlayerText: getPlayerText,
        clickRemove: clickRemove,
        addPlayer: addPlayer,
        navigate: navigate,
        yourTeamValueText: yourTeamValueText,
        otherTeamValueText: otherTeamValueText,
        tradeValueText: tradeValueText
    };
}());

module.exports = homepage;

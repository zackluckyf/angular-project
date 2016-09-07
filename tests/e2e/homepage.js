/*jshint esversion: 6 */
var homepage = (function () {
  'use strict';
  browser.get('index.html');
  var title = element(by.id('heading'));
  var remove = element(by.css('.remove'));
  var getTitleText = function () {
    return title.getText();
  };
  var clickRemove = function () {
    remove.on('click', () => true);
  };
  return {
    getTitleText: getTitleText
  };
}());

module.exports = homepage;

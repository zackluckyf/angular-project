// protractor
var homepage = require('./homepage');
describe('myApp', function () {
  'use strict';
  it('should find "Fantasy Football Trade Analyzer!" inside a heading element', function () {
    expect(homepage.getTitleText()).toEqual('Fantasy Football Trade Analyzer');
  });
});

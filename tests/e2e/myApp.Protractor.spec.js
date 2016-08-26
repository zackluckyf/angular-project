// protractor
describe('myApp', function () {
  beforeEach(function () {
    browser.get('index.html');
  });
  it('should find "Fantasy Football Trade Analyzer!" inside a heading element', function () {
    var text = element(by.id('heading')).getText();
    expect(text).toEqual('Fantasy Football Trade Analyzer!');
    expect(element(by.binding('dc.title')).getText()).toEqual('Fantasy Football Trade Analyzer!');
  });
});

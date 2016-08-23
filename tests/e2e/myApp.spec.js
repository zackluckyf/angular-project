describe('myApp', function () {
  beforeEach(function () {
    browser.get('index.html');
  });
  it('should find hello world! inside a div tag', function () {
    var text = element(by.id('heading')).getText();
    expect(text).toEqual('hello world!');
    expect(element(by.binding('mc.name')).getText()).toEqual('hello world!');
  });
});

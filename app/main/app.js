(function () {
  angular.module('myApp', [])
    .controller('MyController', MyController);
  function MyController () {
    this.name = 'hello world!';
  }
})();

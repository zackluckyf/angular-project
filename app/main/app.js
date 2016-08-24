(function() {
    angular.module('myApp', [])
        .controller('MyController', MyController);

    function MyController() {
        this.name = 'Fantasy Football Trade Analyzer!';
    }
})();

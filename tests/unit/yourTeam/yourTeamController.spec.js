// jasmine
describe('Your Team Controller', function() {
    'use strict';
    var scope, controller, SetupFactory;
    beforeEach(module('myApp.team', 'myApp.yourTeam', 'myApp'));
    beforeEach(inject(function($controller, $rootScope, _SetupFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        SetupFactory = _SetupFactory_;
        spyOn(SetupFactory, 'teamState').and.callThrough();
        controller = $controller('yourTeamController as ytc', {
            $scope: scope
        });
    }));
    it('should not let undefined be added to a team for example Eli Tanning', function() {
        var yourTeam = [{
            name: 'yourTeam',
            players: ['Carson Palmer', 'Adrian Peterson']
        }];
        scope.ytc.updateTeam('Eli Tanning', yourTeam);
        expect(yourTeam).toEqual([{
            name: 'yourTeam',
            players: ['Carson Palmer', 'Adrian Peterson']
        }]);
    });
});

// jasmine
describe('Your Team Controller', function() {
    'use strict';
    var scope, controller, setupService;
    beforeEach(module('myApp.team', 'myApp.yourTeam', 'myApp'));
    beforeEach(inject(function($controller, $rootScope, _setupService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        setupService = _setupService_;
        spyOn(setupService, 'teamState').and.callThrough();
        controller = $controller('yourTeamController as ytc', {
            $scope: scope
        });
    }));
    it('should not let undefined be added to a team for example Eli Tanning', function() {
        var team1 = [{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }];
        scope.ytc.updateTeam('Eli Tanning', team1);
        expect(team1).toEqual([{
            name: 'Adrian Peterson',
            value: 4
        }, {
            name: 'Carson Palmer',
            value: 2
        }]);
    });
});

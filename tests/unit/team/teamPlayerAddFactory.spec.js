describe('Team Player Add Factory', function() {
    'use strict';
    var addPlayersFactory, $httpBackend, $rootScope;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_addPlayersFactory_, _$httpBackend_, _$rootScope_, _SetupFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        addPlayersFactory = _addPlayersFactory_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $httpBackend.when('GET', 'http://localhost:8888/nflPlayers').respond(
            [{
                'playerId': '1',
                'active': '1',
                'jersey': '0',
                'lname': 'Ainge',
                'fname': 'Erik',
                'displayName': 'Erik Ainge',
                'team': 'NYJ',
                'position': 'QB',
                'height': '',
                'weight': '',
                'dob': '0000-00-00',
                'college': ''
            }]
        );
        $httpBackend.when('GET', 'app/yourTeam/yourTeam.html').respond('');
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should call fantasyfootballnerd when addPlayer is called', function() {
        var team = {
            name: 'yourTeam',
            players: []
        };
        addPlayersFactory.loadAndAddPlayer('Erik Ainge', team);
        $httpBackend.flush();
        // $rootScope.$digest()
        expect(team).toEqual({
            name: 'yourTeam',
            players: ['erik ainge']
        });
    });
});

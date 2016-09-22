describe('Players Factory', function () {
  'use strict';
  var playersFactory, $httpBackend, $rootScope, SetupFactory;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_playersFactory_, _$httpBackend_, _$rootScope_, _SetupFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    playersFactory = _playersFactory_;
    SetupFactory = _SetupFactory_;
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
  it('should call fantasyfootballnerd when addPlayer is called', function () {
    var team = {
      name: 'yourTeam',
      players: []
    };
    playersFactory.loadAndAddPlayer('Erik Ainge', team);
    $httpBackend.flush();
    // $rootScope.$digest()
    expect(SetupFactory.teamState('yourTeam')).toEqual({
      name: 'yourTeam',
      players: ['Erik Ainge']
    });
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it('should be able to remove a player from a team', function () {
    SetupFactory.setTeam({
      name: 'otherTeam',
      player: []
    }, 'Adrian Peterson');
    console.log(SetupFactory);
    playersFactory.removePlayer('otherTeam', 0);
    expect(SetupFactory.teamState('otherTeam')).toEqual({
      name: 'otherTeam',
      players: []
    });
  });
});

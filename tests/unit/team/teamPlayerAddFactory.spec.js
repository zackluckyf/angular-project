fdescribe('Team Player Add Factory', function () {
  'use strict';
  var addPlayersFactory, $httpBackend;
  beforeEach(module('myApp.team'));
  beforeEach(inject(function (_addPlayersFactory_, _$httpBackend_, playerurl) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    addPlayersFactory = _addPlayersFactory_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', playerurl).respond({'Players': [{'playerId': '1','active': '1','jersey': '0','lname': 'Ainge','fname': 'Erik','displayName': 'Erik Ainge','team': 'NYJ','position': 'QB','height': '','weight': '','dob': '0000-00-00','college': ''}]});
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should call fantasyfootballnerd when addPlayer is called', function () {
    var team = [];
    addPlayersFactory.loadAndAddPlayer('Erik Ainge', team);
    $httpBackend.flush();
    expect(team).toEqual([{ name: 'erik ainge', value: 2 }]);
  });
});

describe('Team Return Players Factory', function () {
  'use strict';
  var returnTeamFactory, $httpBackend, $rootScope, expectedResult = [{
      name: 'Adrian Peterson',
      value: 4
    }, {
      name: 'Carson Palmer',
      value: 2
    }],
    expectedResult2 = [{
      name: 'Antonio Brown',
      value: 5
    }];

  beforeEach(module('myApp.team'));
  beforeEach(inject(function (_$httpBackend_, _$rootScope_, _returnTeamFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    returnTeamFactory = _returnTeamFactory_;
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it("should return [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}] given team1", function () {
    $httpBackend.when('GET', '/data/teams/1').respond(expectedResult);
    var promise = returnTeamFactory.returnTeam('1');
    var returnData;
    $httpBackend.flush();
    function cb (data) {
      returnData = data;
    }
    promise.then(cb);
    $rootScope.$digest();
    expect(returnData).toEqual(expectedResult);
  });
  it("should return [{name: 'Antonio Brown', value: 5}] given team2", function () {
    $httpBackend.when('GET', '/data/teams/2').respond(expectedResult2);
    var promise = returnTeamFactory.returnTeam('2');
    var returnData;
    $httpBackend.flush();

    function cb (data) {
      returnData = data;
    }
    promise.then(cb);
    $rootScope.$digest();
    expect(returnData).toEqual(expectedResult2);
  });
});

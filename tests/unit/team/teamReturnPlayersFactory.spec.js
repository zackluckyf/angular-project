describe('Team Return Players Factory', function() {
    'use strict';
    var setupFactory, $httpBackend, $rootScope, expectedResult = [{
        id: 1,
        name: 'Adrian Peterson'
    }, {
        id: 2,
        name: 'Carson Palmer'
    }];

    beforeEach(module('myApp'));
    beforeEach(inject(function(_$httpBackend_, _$rootScope_, _setupFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        setupFactory = _setupFactory_;
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it("should return [{id: 1, name: 'Adrian Peterson'}, {id: 2, name: 'Carson Palmer'}]", function() {
        $httpBackend.when('GET', 'http://localhost:8888/teams').respond(expectedResult);
        $httpBackend.when('GET', 'app/yourTeam/yourTeam.html').respond();
        var promise = setupFactory.teamState('team1');
        var returnData;
        $httpBackend.flush();

        function cb(data) {
            returnData = data;
        }
        promise.then(cb);
        $rootScope.$digest();
        expect(returnData).toEqual(expectedResult);
    });
});

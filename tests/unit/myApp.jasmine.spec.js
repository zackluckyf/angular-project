// jasmine
describe('myApp', function() {
    var scope, controller, dataFactory;

    beforeEach(module('myApp.data'));
    beforeEach(inject(function($controller, $rootScope, _dataFactory_, _calculateFactory_, _addFactory_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        dataFactory = _dataFactory_;
        calculateFactory = _calculateFactory_;
        addFactory = _addFactory_;
        spyOn(dataFactory, 'getTeamData').and.callThrough();
        spyOn(calculateFactory, 'calcTeamValue').and.callThrough();
        controller = $controller('dataController as dc', {
            $scope: scope
        });
    }));
    describe('Data Controller', function() {
        it('should give its name as Fantasy Football Trade Analyzer!', function() {
            expect(scope.dc.title).toEqual('Fantasy Football Trade Analyzer!');
        });
        it('should calculate total team value given valid players', function() {
            expect(scope.dc.team1Value).toEqual(6);
        });
        it('should get Team data', function() {
            expect(dataFactory.getTeamData).toHaveBeenCalledWith('team1');
            expect(dataFactory.getTeamData).toHaveBeenCalledWith('team2');
        });
        it("should not let undefined be added to a team for example Eli Tanning", function() {
            scope.dc.updateTeam1('Eli Tanning');
            expect(scope.dc.team1).toEqual([{
                name: 'Adrian Peterson',
                value: 4
            }, {
                name: 'Carson Palmer',
                value: 2
            }]);
        });
        it("should return each teams player values and say that the original trade is good", function() {
            expect(scope.dc.tradeAnalysis(scope.dc.team1, scope.dc.team2)).toEqual('Your player value: ' + 6 + '\nTheir player value: ' + 5 + '\nThis is a good trade for you!');
        });
    });
    describe('Data Factory', function() {
        it("should return [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}] given team1", function() {
            expect(dataFactory.getTeamData('team1')).toEqual([{
                name: 'Adrian Peterson',
                value: 4
            }, {
                name: 'Carson Palmer',
                value: 2
            }]);
        });
        it("should return [{name: 'Antonio Brown', value: 5}] given team2", function() {
            expect(dataFactory.getTeamData('team2')).toEqual([{
                name: 'Antonio Brown',
                value: 5
            }]);
        });
    });
    describe('Calc Factory', function() {
        it("should return 6 given [{name: 'Adrian Peterson', value: 4}, {name: 'Carson Palmer', value: 2}]", function() {
            expect(calculateFactory.calcTeamValue([{
                name: 'Adrian Peterson',
                value: 4
            }, {
                name: 'Carson Palmer',
                value: 2
            }])).toEqual(6);
        });
        it("should return 5 given [{name: 'Antonio Brown', value: 5}]", function() {
            expect(calculateFactory.calcTeamValue([{
                name: 'Antonio Brown',
                value: 5
            }])).toEqual(5);
        });
    });
    describe("Add Factory", function() {
        it("should return an Eli Manning object when given Eli Manning", function() {
            expect(addFactory.addPlayer('Eli Manning')).toEqual({
                name: 'Eli Manning',
                value: 1
            });
        });
    });
});

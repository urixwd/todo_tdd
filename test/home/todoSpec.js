describe('Todo controller tests', function(){
    //load the app
    beforeEach(module('myApp'));

    //get the controller
    var scope, ctrl;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('todoController', { $scope: scope });
    }));

    /* tests */
    it('default msg', function(){
        expect(scope.msg).toBe('hello world');
    });
    it('change msg', function(){
        scope.changeMsg('new msg');
        expect(scope.msg).toBe('new msg');
    });
});

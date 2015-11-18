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
    describe('startup', function(){
        it('list should be empty', function(){

        });
    });
    describe('add task', function(){
        it('list should contain a task', function(){

        });
        it('default priority should be \'normal\'', function(){

        });
        it('task should not be marked as done', function(){

        });
    });
    describe('mark as done', function(){
       it('task should be marked as done', function(){

       })
    });
    describe('clear', function(){
        it('clear a task - should not be at the model', function(){

        });
        it('clear all - model should contain no values', function(){

        });
    });

});

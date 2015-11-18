describe('Todo controller tests', function(){
    //load the app
    beforeEach(module('myApp'));

    //get the controller
    var scope, ctrl;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('todoController', { $scope: scope });
    }));

    //create task - simulation function
    var createTasks = function(){
        scope.model.push({name: 'first', priority: 'normal', done: false});
        scope.model.push({name: 'second', priority: 'low', done: true});
        scope.model.push({name: 'third', priority: 'normal', done: true});
    };

    /* tests */
    describe('startup', function(){
        it('list should be empty', function(){
            expect(scope.model.length).toBe(0);
        });
    });
    describe('add task', function(){
        it('list should contain a task', function(){
            scope.addTask('first task');
            expect(scope.model[0].name).toEqual('first task');
        });
        it('default priority should be \'normal\'', function(){
            scope.addTask('first task');
            expect(scope.model[0].priority).toEqual('normal');
        });
        it('task should not be marked as done', function(){
            scope.addTask('first task');
            expect(scope.model[0].done).toEqual(false);
        });
    });
    describe('mark/unmark all as done', function(){
       it('mark all - all task should be marked as done', function(){
           createTasks();
           var initialLength = scope.model.length;
           scope.markAllAsDone();
           expect(_.where(scope.model, {'done': true}).length).toEqual(initialLength);
       });
       it('unmark all - all task should not be marked as done', function(){
           createTasks();
           var initialLength = scope.model.length;
           scope.unMarkAllAsDone();
           expect(_.where(scope.model, {'done': true}).length).toEqual(0);
       });
    });
    describe('clear', function(){
        it('clear a task - should not be at the model', function(){
            createTasks();
            var initialLength = scope.model.length;
            scope.clearAll();
            expect(scope.model.length).toEqual(0);
        });
        it('clear all - model should contain no values', function(){
            createTasks();
            var initialLength = scope.model.length;
            scope.clearTask(1);
            expect(_.where(scope.model, {'name': 'second'}).length).toEqual(0);
        });
    });
});

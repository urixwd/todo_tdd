(function () {

    function todoController($scope, $rootScope) {
        /*properties*/
        $scope.model = [];
        $scope.priorities = ['low', 'normal', 'high'];
        $scope.newTaskName = '';

        /* methods */
        //private
        var changeValueInModel = function(property, value){
            $scope.model.map(
                function(val){
                    val[property] = value;
                    return val;
                });
        };
        //public
        $scope.addTask = function(name){
            $scope.model.push({name: name, priority: 'normal', done: false});
            $scope.newTaskName = '';
        };
        $scope.clearTask = function(index){
            if($scope.model[index] && $scope.model[index].done) $scope.model.splice(index, 1);
        };
        $scope.clearAll = function(){
            $scope.model = [];
        };
        $scope.markAllAsDone = function(){
            changeValueInModel('done', true);
        };
        $scope.unMarkAllAsDone = function(){
            changeValueInModel('done', false);
        };

    }

    angular.module("myApp").controller("todoController", ['$scope', '$rootScope', todoController]);
})();
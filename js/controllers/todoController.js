(function () {

    function todoController($scope, $rootScope) {
        $scope.msg = 'hello world';
        $scope.changeMsg = function(msg){
            this.msg = msg;
        }
    }

    angular.module("myApp").controller("todoController", ['$scope', '$rootScope', todoController]);
})();
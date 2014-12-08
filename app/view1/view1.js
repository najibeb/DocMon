'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.grid'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {

        $scope.gridOptions = {
            enableSorting: true

        };
        $scope.name = "najib";

        $http.get("/DocMon/app/test_data").success(function (data, status, headers, config) {
                $scope.gridOptions.data = data;
            }
        );

        $scope.click = function() {
            $scope.gridOptions.data.push({firstName : $scope.name});
        }

    }]);
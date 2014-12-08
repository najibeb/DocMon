'use strict';

angular.module('myApp.view2', ['ngRoute','smart-table'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [ '$scope', '$http',function($scope, $http) {
      $http.get("/DocMon/app/test_data").success(function (data, status, headers, config) {
            $scope.rowCollection = data;
          }
      );

}]);
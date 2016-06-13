'use strict';

/**
 * @ngdoc function
 * @name eshopApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the eshopApp
 */
angular.module('eshopApp')
    .controller('TableCtrl', function($scope, TableService) {
    	$scope.tableForm = function (){
    		$scope.name = "Akhilesh";
            $scope.age = 29;
            $scope.money = 115000;
            $scope.country = "India";
    	};


    });

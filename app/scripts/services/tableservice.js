'use strict';

/**
 * @ngdoc service
 * @name eshopApp.TableService
 * @description
 * # TableService
 * Service in the eshopApp.
 */
angular.module('eshopApp')
    .service('TableService', function($http) {
        var table = this;
        table.datasets = [];
        $http.get('table.json').success(function(data) {
            table.datasets = data;
        });
        return function(message) {
            table.datasets.push(message);
        }
    });

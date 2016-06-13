'use strict';

/**
 * @ngdoc service
 * @name eshopApp.QuizService
 * @description
 * # QuizService
 * Service in the eshopApp.
 */
angular.module('eshopApp')
    .service('QuizService', function($http) {        
        var quiz = this;
        quiz.datasets = [];
        $http.get('quiz.json').success(function(data) {
            quiz.datasets = data;
        });
        return {
            getQuestion: function(id) {
                if (id < quiz.datasets.length) {
                    return quiz.datasets[id];
                } else {
                    return false;
                }
            }
        };
    });

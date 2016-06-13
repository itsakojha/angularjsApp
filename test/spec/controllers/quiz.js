'use strict';

describe('Controller: QuizCtrl', function () {

  // load the controller's module
  beforeEach(module('eshopApp'));

  var QuizCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizCtrl = $controller('QuizCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuizCtrl.awesomeThings.length).toBe(3);
  });
});

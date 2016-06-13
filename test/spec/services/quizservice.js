'use strict';

describe('Service: QuizService', function () {

  // load the service's module
  beforeEach(module('eshopApp'));

  // instantiate service
  var QuizService;
  beforeEach(inject(function (_QuizService_) {
    QuizService = _QuizService_;
  }));

  it('should do something', function () {
    expect(!!QuizService).toBe(true);
  });

});

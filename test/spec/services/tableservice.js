'use strict';

describe('Service: TableService', function () {

  // load the service's module
  beforeEach(module('eshopApp'));

  // instantiate service
  var TableService;
  beforeEach(inject(function (_TableService_) {
    TableService = _TableService_;
  }));

  it('should do something', function () {
    expect(!!TableService).toBe(true);
  });

});

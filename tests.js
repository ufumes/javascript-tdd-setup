'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, 4 for constants 2, 5 as a and n respectively", function() {
    assert(lib.sumOfprimes(5)==10, 'I am an error');
  });
   it("should give 10, 4 for constants 2, 5 as a and n respectively", function() {
    assert(
      lib.sumOfprimes(5)==10);
  });
  
});
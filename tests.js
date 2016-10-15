'use strict'
//var assert = require('assert');
var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Tests to ensure that accurate result is obtained.", function() {
  it("should give 10 when 5  is supplied", function() {
    assert(lib.sumOfprimes(5)==10, 'Wrong Calculation: Check Logic');
  });
  it("should give 77 when 20 is supplied", function() {
    assert(
      lib.sumOfprimes(20)==77,'Wrong Calculation: Check Logic');
  });
  it("should give 129 when 30 is supplied", function() {
    assert(
      lib.sumOfprimes(30)==129,'Wrong Calculation: Check Logic');
  });
  it("should give 17 when 10 is supplied", function() {
    assert(
      lib.sumOfprimes(10)==17,'Wrong Calculation: Check Logic');
  });

//another way to use the assert function
  it("should give 0 after computing for 0", function() {
      assert.equal(lib.sumOfprimes(0), 0)
  });
  it("should give 0 after computing for 1", function() {
      assert.equal(lib.sumOfprimes(1), 0)
  });
  it("should give 2 after computing for 2", function() {
      assert.equal(lib.sumOfprimes(2), 2)
  });
});

describe("INPUT VALIDATION ASSESMENTS.", function() {
  it("should give 'invalid input' for non numeric input", function() {
    assert(lib.sumOfprimes('d')=='invalid input', 'Failed to reject non numeric input.');
  });
  it("should give 'invalid input' for blank input", function() {
    assert(
      lib.sumOfprimes('')=='invalid input','Failed to reject blank string.');
  });
  it("should give 'missing input' for cases where no input was supplied", function() {
    assert(
      lib.sumOfprimes()=='invalid input','Failed to reject invalid input.');
  });
  it("should give 'invalid input' for negative input", function() {
    assert(
      lib.sumOfprimes(-2)=='invalid input','Failed to reject negative input.');
  });
  it("should give 'invalid input' for non numeric input", function() {
    assert(
      lib.sumOfprimes('23b')=='invalid input','Failed to reject non numeric input.');
  });
});

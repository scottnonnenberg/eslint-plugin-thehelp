'use strict';

var chai = require('chai');
var expect = chai.expect;

var index = require('src/index');


describe('index', function() {
  it('has truthy property "absolute-or-current-dir"', function() {
    expect(index.rules).to.have.property('absolute-or-current-dir').that.exist;
  });

  it('has truthy property "no-mutation"', function() {
    expect(index.rules).to.have.property('no-mutation').that.exist;
  });

  it('has truthy property "no-array-mutation"', function() {
    expect(index.rules).to.have.property('no-array-mutation').that.exist;
  });
});

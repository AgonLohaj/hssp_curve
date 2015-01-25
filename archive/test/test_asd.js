/*
 * asd
 * https://github.com/bardhlohaj/asd
 *
 * Copyright (c) 2014 bardhlohaj
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var asd = require('../');

describe('asd module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(asd.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      asd.hello('biojs').should.equal("hello biojs");
    });
  });
});

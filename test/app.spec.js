var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var functionsFile = fs.readFileSync(process.cwd() + '/public/js/app.js');
vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

var expect = chai.expect;
var should = chai.should();

describe('Waka', function() {
  it('Should Flocka', function() {
    expect('BowBowBow').to.be.a('string');
  });
});
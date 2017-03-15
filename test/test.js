var should = require('should');
var isItFriday = require('../');

describe('is-it-friday', function () {
	it('should make an educated guess', function (done) {
		isItFriday.should.equal('Probably not...');
		done();
	});
});
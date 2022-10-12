/* eslint-disable indent *//* eslint-disable linebreak-style */
const Calculator = require('../../app/Calculator');
const {expect} = require('chai');

describe('Calculator Add and Multiply positive scenarios', function() {
    let validator;
    beforeEach(function() {
        validator = new Calculator();
    });
    afterEach(function() {
        validator = null;
    });
    it('should pass if Add works well' , function() {
        expect(validator.add(1,3)).to.be.equal(4);
    });
    it('should pass if Multiply works well', function() {
        expect(validator.multiply(2,5)).to.be.equal(10);
    });
});

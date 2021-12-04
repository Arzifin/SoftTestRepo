import chai from 'chai';
var expect = chai.expect;

import isEmpty from '../src/isEmpty.js';

describe('isEmpty unit tests', () => {
    it('null should return true', () => {
        const result = isEmpty(null);
        expect(result).to.equal(true);
    });

    it('true should return true', () => {
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });

    it('1 should return true', () => {
        const result = isEmpty(1);
        expect(result).to.equal(true);
    });

    it('list with items should return false', () => {
        const result = isEmpty([1,2]);
        expect(result).to.equal(false);
    });

    it('empty list should return true', () => {
        const result = isEmpty([]);
        expect(result).to.equal(true);
    });

    it('empty string should return true', () => {
        const result = isEmpty('');
        expect(result).to.equal(true);
    });

    it('string should return false', () => {
        const result = isEmpty('abc');
        expect(result).to.equal(false);
    });
});
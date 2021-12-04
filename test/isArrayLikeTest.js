import chai from 'chai';
var expect = chai.expect;

import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike unit tests', () => {
    it('empty list should return true', () => {
        const result = isArrayLike([]);
        expect(result).to.equal(true);
    });

    it('[1,2,3] should return true', () => {
        const result = isArrayLike([1,2,3]);
        expect(result).to.equal(true);
    });

    it('null should return false', () => {
        const result = isArrayLike(null);
        expect(result).to.equal(false);
    });

    it('string should return true', () => {
        const result = isArrayLike("word");
        expect(result).to.equal(true);
    });

    it('int should return false', () => {
        const result = isArrayLike(1);
        expect(result).to.equal(false);
    });

    it('function should return false', () => {
        const result = isArrayLike(Function);
        expect(result).to.equal(false);
    });
});
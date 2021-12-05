import chai from 'chai';
var expect = chai.expect;

import isObject from '../src/isObject.js';

describe('isObject unit tests', () => {
    it('function should return true', () => {
        const result = isObject(Function);
        expect(result).to.equal(true);
    });

    it('list should return true', () => {
        const result = isObject([1,2,3]);
        expect(result).to.equal(true);
    });

    it('null should return false', () => {
        const result = isObject(null);
        expect(result).to.equal(false);
    });
});
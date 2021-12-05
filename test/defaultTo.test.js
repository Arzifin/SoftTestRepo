import chai from 'chai';
var expect = chai.expect;

import defaultTo from '../src/defaultTo.js';

describe('defaultTo unit tests', () => {
    it('1, NaN should return 1', () => {
        const result = defaultTo(1, NaN);
        expect(result).to.equal(1);
    });

    it('1, null  should return 1', () => {
        const result = defaultTo(1, null);
        expect(result).to.equal(1, null);
    });

    it('1, undefined should return 1', () => {
        const result = defaultTo(1, undefined);
        expect(result).to.equal(1);
    });

    it('NaN, 2 should return 2', () => {
        const result = defaultTo(NaN, 2);
        expect(result).to.equal(2);
    });

    it('null, 2  should return 2', () => {
        const result = defaultTo(null, 2);
        expect(result).to.equal(2);
    });

    it('undefined, 2 should return 2', () => {
        const result = defaultTo(undefined, 2);
        expect(result).to.equal(2);
    });

    it('2, 3 should return 2', () => {
        const result = defaultTo(2);
        expect(result).to.equal(2);
    });

    it('abc, 1 should return abc', () => {
        const result = defaultTo('abc', 1);
        expect(result).to.equal('abc');
    });

    it('-1, 1 should return -1', () => {
        const result = defaultTo(-1, 1);
        expect(result).to.equal(-1);
    });
});
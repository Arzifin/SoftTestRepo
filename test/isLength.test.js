import chai from 'chai';
var expect = chai.expect;

import isLength from '../src/isLength.js';

describe('isLength unit tests', () => {
    it('3 should return true', () => {
        const result = isLength(3);
        expect(result).to.equal(true);
    });

    it('Number.MIN_VALUE should return false', () => {
        const result = isLength(Number.MIN_VALUE);
        expect(result).to.equal(false);
    });

    it('Infinity should return false', () => {
        const result = isLength(Infinity);
        expect(result).to.equal(false);
    });

    it('string 1 should return false', () => {
        const result = isLength('1');
        expect(result).to.equal(false);
    });

    it('-1 should return false', () => {
        const result = isLength(-1);
        expect(result).to.equal(false);
    });

    it('-100000000000000 should return false', () => {
        const result = isLength(-100000000000000);
        expect(result).to.equal(false);   
    });

    it('1.5 should return false', () => {
        const result = isLength(1.5);
        expect(result).to.equal(false);   
    });
});
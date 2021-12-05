import chai from 'chai';
var expect = chai.expect;

import isSymbol from '../src/isSymbol.js';

describe('isSymbol unit tests', () => {
    it('Symbol.iterator should return true', () => {
        const result = isSymbol(Symbol.iterator);
        expect(result).to.equal(true);
    });

    it('abc should return false', () => {
        const result = isSymbol('abc');
        expect(result).to.equal(false);
    });

    it('null should return false', () => {
        const result = isSymbol(null);
        expect(result).to.equal(false);
    });

    it('1 should return false', () => {
        const result = isSymbol(1);
        expect(result).to.equal(false);
    });
});
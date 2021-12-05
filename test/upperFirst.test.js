import chai from 'chai';
var expect = chai.expect;

import upperFirst from '../src/upperFirst.js';

describe('upperFirst unit tests', () => {
    it('abc should return Abc', () => {
        const result = upperFirst('abc');
        expect(result).to.equal('Abc');
    });

    it('empty string should return empty string', () => {
        const result = upperFirst('');
        expect(result).to.equal('');
    });

    it('space at the start should not affect output', () => {
        const result = upperFirst(' abc');
        expect(result).to.equal(' abc');
    });

    it('ABC should return ABC', () => {
        const result = upperFirst('ABC');
        expect(result).to.equal('ABC');
    });
});
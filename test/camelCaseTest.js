import chai from 'chai';
var expect = chai.expect;

import camelCase from '../src/camelCase.js';

describe('camelCase unit tests', () => {
    it('Foo Bar should return fooBar', () => {
        const result = camelCase('Foo Bar');
        expect(result).to.equal('fooBar');
    });

    it('--foo-bar-- should return fooBar', () => {
        const result = camelCase('--foo-bar--');
        expect(result).to.equal('fooBar');
    });

    it('__FOO_BAR__ should return fooBar', () => {
        const result = camelCase('__FOO_BAR__');
        expect(result).to.equal('fooBar');
    });
    
    it('a should return a', () => {
        const result = camelCase('a');
        expect(result).to.equal('a');
    });

    it('a.b.c should return aBC', () => {
        const result = camelCase('a.b.c');
        expect(result).to.equal('aBC');
    });

    it('abc abc abc should return abcAbcAbc', () => {
        const result = camelCase('abc abc abc abc');
        expect(result).to.equal('abcAbcAbcAbc');
    });
});
import chai from 'chai';
var expect = chai.expect;

import reduce from '../src/reduce.js';

describe('reduce unit tests', () => {
    it('[1, 2], (sum, n) => sum + n, 0 should return 3', () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0);
        expect(result).to.equal(3);
    });

    it('[], (sum, n) => sum + n, 0 should return 0', () => {
        const result = reduce([], (sum, n) => sum + n, 0);
        expect(result).to.equal(0);
    });

    it('["", "b", "c"], (v1, v2) => v1 + v2, "a" should return "abc"', () => {
        const result = reduce(["", "b", "c"], (v1, v2) => v1 + v2, "a");
        expect(result).to.equal("abc");
    }); 

    it('null, (v1, v2) => v1 + v2, "a" should return "a"', () => {
        const result = reduce(null, (v1, v2) => v1 + v2, "a");
        expect(result).to.equal("a");
    }); 

    it('["a", "b", "c"], (v1, v2) => v1 + v2, should return "abc"', () => {
        const result = reduce(["a", "b", "c"], (v1, v2) => v1 + v2);
        expect(result).to.equal("abc");
    }); 
});
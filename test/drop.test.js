import chai from 'chai';
var expect = chai.expect;

import drop from '../src/drop.js';

describe('drop unit tests', () => {
    it('[1, 2, 3] should return [2, 3]', () => {
        const result = drop([1, 2, 3]);
        expect(result).to.have.ordered.members([2, 3]);
    });

    it('[1, 2, 3], 2 should return [3]', () => {
        const result = drop([1, 2, 3], 2);
        expect(result).to.have.ordered.members([3]);
    });

    it('[1, 2, 3], 5 should return []', () => {
        const result = drop([1, 2, 3], 5);
        expect(result).to.have.ordered.members([]);
    });
    
    it('[1, 2, 3], 0 should return [1, 2, 3]', () => {
        const result = drop([1, 2, 3], 0);
        expect(result).to.have.ordered.members([1, 2, 3]);
    });

    it('[1, 2, 3], -1 should return [1, 2, 3]', () => {
        const result = drop([1, 2, 3], -1);
        expect(result).to.have.ordered.members([1, 2, 3]);
    });

    it('[1, 2, 3], 100000000000 should return []', () => {
        const result = drop([1, 2, 3], 100000000000);
        expect(result).to.have.ordered.members([]);
    });

    it('[1, 2, 3], null should return [1, 2, 3]', () => {
        const result = drop([1, 2, 3], null);
        expect(result).to.have.ordered.members([1, 2, 3]);
    });
});
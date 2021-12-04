import chai from 'chai';
var expect = chai.expect;
import drop from '../src/drop.js';

/*
* 1. Force unwanted variable as parameter to function
* 2. --
* 3. Check that function drops 'n' -amount of elements.
* 
*/

describe('Drop', () => {

    it ("should throw exception, when passing non-integer as 2nd parameter", () => {
        expect(() => drop(55, "Hello")).to.throw(TypeError);
    });

    
});
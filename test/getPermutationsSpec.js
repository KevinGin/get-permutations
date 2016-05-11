/*global describe it*/
import assert from 'assert';
import now from 'performance-now';
import getPermutations from '../src/getPermutations.js';

const randomArray = (length, max) => [...new Array(length)]
    .map((_, i) => Math.round(Math.random() * max));

describe('getPermutations() should...', function () {
    it(`perumtate array with chars`, function () {
        const permutations = getPermutations(['a', 'b']);
        assert.deepEqual(permutations, [['b', 'a'], ['a', 'b']]);
    });

    it(`perumtate array with numbers`, function () {
        const permutations = getPermutations([1, 0, 1]);
        assert.deepEqual(permutations, [[0, 1, 1], [0, 1, 1], [1, 0, 1], [1, 1, 0], [1, 1, 0], [1, 0, 1]]);
    });

    it(`perumtate large array with numbers`, function () {
        const large = randomArray(3,10);
        const start = now();
        getPermutations(large);
        const end = now();
        console.log(end-start);
        assert.deepEqual(end-start < 1, true);
    });

});
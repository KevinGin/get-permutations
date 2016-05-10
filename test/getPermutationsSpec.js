/*global describe it*/
import assert from 'assert';
import getPermutations from '../src/getPermutations.js';
import now from 'performance-now';

describe('getPermutations() should...', function () {
    it(`find diff in shallow object`, function () {
        const permutations = getPermutations(['a','b']);
        assert.deepEqual(permutations, [['b','a'],['a','b']]);
    });

    it(`find diff in shallow object`, function () {
        const permutations = getPermutations([1,0,1]);
        assert.deepEqual(permutations, [[0,1,1],[0,1,1],[1,0,1],[1,1,0],[1,1,0],[1,0,1]]);
    });
});
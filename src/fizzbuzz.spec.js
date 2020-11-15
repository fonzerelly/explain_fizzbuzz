const { it, describe, expect } = require("@jest/globals");
const { fizzbuzz } = require('./fizzbuzz');

describe('fizzbuzz', () => {

    [
        {input: 1, output: "1"},
        {input: 2, output: "2"},
        {input: 3, output: "fizz"},
        {input: 6, output: "fizz"},
        {input: 5, output: "buzz"},
        {input: 10, output: "buzz"},
        {input: 3*5, output: "fizzbuzz"},
        {input: 7, output: "zuzz"},
        {input: 3*7, output: "fizzzuzz"},
        {input: 5*7, output: "buzzzuzz"},
        {input: 3*5*7, output: "fizzbuzzzuzz"}
        
    ].forEach(({input, output}) => {
        it(`should turn ${input} to "${output}"`, () => {
            expect(fizzbuzz(input)).toBe(output)
        });
    });
})
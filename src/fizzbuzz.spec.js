const { it, describe, expect } = require("@jest/globals");
const { fizzbuzz } = require('./fizzbuzz');

describe('fizzbuzz', () => {

    [
        {input: 1, output: "1"},
        {input: 2, output: "2"},
        {input: 3, output: "fizz"},
        {input: 6, output: "fizz"},
        {input: 5, output: "buzz"},
        {input: 10, output: "buzz"}
    ].forEach(({input, output}) => {
        it(`should turn ${input} to "${output}"`, () => {
            expect(fizzbuzz(input)).toBe(output)
        });
    });
})
const { it, describe, expect } = require("@jest/globals");
const { fizzbuzz } = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('should turn 1 to "1"', () => {
        expect(fizzbuzz(1)).toBe("1")
    })
})
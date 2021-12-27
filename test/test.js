const INOETS = require("../build/index");
const assert = require("assert");

describe("Determine whether inputs are odd or even, not odd, or not even", () => {

    it("should return false", () => {
        assert.equal(INOETS.isEven(1), false);
    });

    it("should return false", () => {
        assert.equal(INOETS.isOdd(2), false);
    });

    it("should return true", () => {
        assert.equal(INOETS.isNotEven(1.2), true);
    });

    it("should return false", () => {
        assert.equal(INOETS.isNotOdd(1), false);
    });
});
const inoets = require("../build/index");
const assert = require("assert");

describe("Determine whether inputs are odd or even, not odd, or not even", () => {

    it("should return false", () => {
        assert.equal(inoets.isEven(1), false);
    });

    it("should return false", () => {
        assert.equal(inoets.isOdd(2), false);
    });

    it("should return true", () => {
        assert.equal(inoets.isNotEven(1.2), true);
    });

    it("should return false", () => {
        assert.equal(inoets.isNotOdd(1), false);
    });
});
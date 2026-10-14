// Run with: node gpa.test.js
const assert = require("assert");
const { GRADES, calculateGPA, calculateCumulative } = require("./gpa");

// Anna University grade points
assert.deepStrictEqual(
  [GRADES.O, GRADES["A+"], GRADES.A, GRADES["B+"], GRADES.B, GRADES.C, GRADES.U],
  [10, 9, 8, 7, 6, 5, 0]
);

// (4*8 + 4*7 + 3*6) / 11 = 78 / 11 = 7.0909...
let r = calculateGPA([
  { credits: 4, points: GRADES.A },
  { credits: 4, points: GRADES["B+"] },
  { credits: 3, points: GRADES.B },
]);
assert.strictEqual(r.credits, 11);
assert.ok(Math.abs(r.gpa - 7.090909) < 1e-5);

// A failed course (U) still counts its credits
r = calculateGPA([
  { credits: 3, points: GRADES.O },
  { credits: 3, points: GRADES.U },
]);
assert.strictEqual(r.gpa, 5);

// Empty / invalid rows are ignored
r = calculateGPA([{ credits: NaN, points: 10 }, { credits: 0, points: 9 }]);
assert.strictEqual(r.gpa, null);

// Cumulative: (9*20 + 8*40) / 60 = 8.333...
assert.ok(Math.abs(calculateCumulative(9, 20, 8, 40) - 8.333333) < 1e-5);

// No previous data -> semester GPA
assert.strictEqual(calculateCumulative(9, 20, NaN, NaN), 9);

console.log("All tests passed ✔");

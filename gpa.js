// Pure calculation logic (no DOM), so it can be tested with Node.

// Anna University 10-point grading scale (used by Easwari Engineering College).
const GRADES = { O: 10, "A+": 9, A: 8, "B+": 7, B: 6, C: 5, U: 0, SA: 0, W: 0 };

/**
 * @param {{credits:number, points:number}[]} courses
 * @returns {{gpa:number|null, credits:number}}
 */
function calculateGPA(courses) {
  let totalCredits = 0;
  let totalPoints = 0;
  for (const c of courses) {
    if (!(c.credits > 0) || !Number.isFinite(c.points)) continue;
    totalCredits += c.credits;
    totalPoints += c.credits * c.points;
  }
  return {
    gpa: totalCredits ? totalPoints / totalCredits : null,
    credits: totalCredits,
  };
}

/** Combine the current semester with previous cumulative results. */
function calculateCumulative(semGpa, semCredits, prevGpa, prevCredits) {
  if (semGpa === null) return null;
  if (!(prevCredits > 0) || !Number.isFinite(prevGpa)) return semGpa;
  const credits = semCredits + prevCredits;
  return (semGpa * semCredits + prevGpa * prevCredits) / credits;
}

if (typeof module !== "undefined") {
  module.exports = { GRADES, calculateGPA, calculateCumulative };
}

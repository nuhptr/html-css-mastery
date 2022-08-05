/* test("deskripsi dari testcase kamu", () => {
  expect(perintah).matcher(nilai yang diexpextasikan);
}); */

// import * as jest from "jest";

/* describe("Pengujian olah aritmatika", () => {
  test("#1 dua ditambah dua sama dengan 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("#2 dua dikali 3 sama dengan 6", () => {
    expect(2 * 3).toBe(6);
  });
}); */

const { averageExams } = require("./grade-calculation.js");

test("it should return exact average", () => {
  const listValueOfExams = [80, 100, 100, 80];
  expect(averageExams(listValueOfExams)).toEqual(90);
});

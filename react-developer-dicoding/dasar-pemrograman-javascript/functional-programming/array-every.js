// Mengecek apakah semua nilai dari array sesuai dengan kriteria yang didefinisikan
// TODO: arr.every(callback(element, [index], [array])

const scores = [60, 70, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed); // false

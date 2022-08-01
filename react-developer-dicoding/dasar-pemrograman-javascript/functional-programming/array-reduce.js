// Fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja
// TODO: arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// [] => optional value

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "Meguire",
    score: 70,
  },
  {
    name: "Kane",
    score: 85,
  },
  {
    name: "Son",
    score: 90,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); // 305

// Melakukan filtering terhadap data di array

// Menghilangkan nilai falsy di array
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray);
// [ 1, 'Hallo', 'Harry', 14 ]

// Example 2 :
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

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score >= 85
);
  
console.log(eligibleForScholarshipStudents);
// [ { name: 'Kane', score: 85 }, { name: 'Son', score: 90 } ]

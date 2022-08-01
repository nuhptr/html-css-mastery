/* 
Mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 
find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan 
nilai undefine bila tidak ada kriteria yang terpenuhi pada item array 
*/
// TODO: arr.find(callback(element, [index], [array]), [thisArg])
// [...] => optional parameter

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const findJames = students.find((student) => student.name === "James");
console.log(findJames); // { name: 'James', score: 88 }

/* 
Melakukan pengurutan nilai dari sebuah deretan nilai 
secara default akan mengubah semua nilai dalam deretan menjadi bentuk string
dan mengurutkannya secara ascending
*/
// TODO: arr.sort([compareFunction])
// [...] => optional parameter

const months = ["March", "Jan", "Feb", "Dec"];

months.sort();
console.log(months);
// [ 'Dec', 'Feb', 'Jan', 'March' ] diurutkan berdasarkan pola string

const array1 = [1, 10, 4, 100];
const compareNumber = (a, b) => {
  return a - b;
};

const sorting = array1.sort(compareNumber);
console.log(sorting); // [ 1, 4, 10, 100 ]

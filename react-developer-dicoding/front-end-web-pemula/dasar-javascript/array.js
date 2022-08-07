let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]); // Cokelat
console.log(myArray[1]); // 42.5
console.log(myArray[2]); // 22
console.log("Panjang nilai myArray adalah " + myArray.length + "."); // Panjang nilai myArray 5

// Tambah data array (push)
myArray.push("Javascript");
console.log(myArray); // Output : [ 'Cokelat', 42.5, 22, true, 'Programming', 'Javascript' ]

// Mengeluarkan data array (pop)
myArray.pop();
console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming' ]

/*
  Metode lain yang bisa kita gunakan untuk memanipulasi data pada array 
  adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan 
  elemen pertama dari array, sementara unshift() digunakan untuk menambahkan 
  elemen di awal array. 
*/

const arrayShift = ["Brown", "Programming", 22, 10];
arrayShift.shift();
arrayShift.unshift("Brown");
console.log(arrayShift); // [ 'Brown', 'Programming', 22, 10 ]

delete arrayShift[1];
console.log(arrayShift); // [ 'Brown', <1 empty item>, 22, 10 ]

// Menghapus dari index 2 sebanyak 1 elemen
arrayShift.splice(2, 1);
console.log(arrayShift); // ['Cokelat', 42.5, true, 'Programming']

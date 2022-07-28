let myArray = ["Cokelat", 45.2, 22, true, "Programming"];
console.log(myArray);

// output : ['Cokelat', 45.2, 22, true, "Programming"]

// cara memanggil index array
console.log(myArray[1]); // 45.2

// menghitung panjang array
console.log("Panjang nilai myArray adalah " + myArray.length + "."); // 5

// TODO: Menambah data ke array menggunakan push() -> di elemen terakhir bertambahnya
myArray.push("Javascript");
myArray.push(true);
console.log(myArray);
// output : [ 'Cokelat', 45.2, 22, true, 'Programming', 'Javascript', true ]

// TODO: Menghapus data dari elemen terakhir menggunakan pop() -> elemen terakhir di pop
myArray.pop();
console.log(myArray);
// output : [ 'Cokelat', 45.2, 22, true, 'Programming', 'Javascript' ]

// TODO: Menambah elemen diawal array menggunakan unshift()
let newArray = ["Aku", 10, 2.5, true];
newArray.unshift("Kalau");
console.log(newArray); // [ 'Kalau', 'Aku', 10, 2.5, true ]

// TODO: Mengeluarakan elemen diawal array menggunakan shift()
newArray.shift();
console.log(newArray); // [ 'Aku', 10, 2.5, true ]

// TODO: Menghapus elemen menggunakan splice()
newArray.splice(0, 1); // artinya menghapus dari index ke 0 sebanyak 1 elemen
console.log(newArray); // [ 10, 2.5, true ]

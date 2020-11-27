console.log("Hello From Arrays")

const namaMantan = ["Rianti", "Oktin", "Syifa"]

console.log(namaMantan.length) // 3
console.log(namaMantan[1]) // Oktin

namaMantan.push("Dewi")

namaMantan.forEach( function (item, index, array){
    console.log(item, index)
}) // perulangan

namaMantan.pop() // menghapus value akhir[n-1]

console.log(namaMantan)

namaMantan.shift() // menghapus value index[0]
// (2) ["oktin", "Syifa"]
console.log(namaMantan)


namaMantan.splice(namaMantan.indexOf("Oktin"), 1)
console.log(namaMantan) // ["Syifa"]

/* Array Prototype Reduce */
const mantanBaru = ["Adi", "Yuan", "Marimas", "Haru"]

console.log(
    mantanBaru 
    .reduce(function (acc, mantan, ke){
        acc[mantan] = `Mantan ke ${ke +1}`;
        return acc;
    }, {}) 
);
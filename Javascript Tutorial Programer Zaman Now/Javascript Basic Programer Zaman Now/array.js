// TODO: Array
let arrayKosong = [];
let arrayName = ["eko", "kurniawan", "khannedy"];

const names = [];
names.push("eko"); // ada data eko
names.push("Kurniawan", "Khannedy");

console.table(names);
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │    'eko'    │
// │    1    │ 'Kurniawan' │
// │    2    │ 'Khannedy'  │
// └─────────┴─────────────┘

// TODO: operator in array
console.info(names[0]); // eko
names[1] = "Chandra"; // change to chandra

console.table(names);
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │   'eko'    │
// │    1    │ 'Chandra'  │
// │    2    │ 'Khannedy' │
// └─────────┴────────────┘

delete names[2]; // index 2 delete data but not index
console.table(names);
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │   'eko'   │
// │    1    │ 'Chandra' │
// └─────────┴───────────┘

names[2] = "diubah lagi"; // index 2 still consist and there are in table again

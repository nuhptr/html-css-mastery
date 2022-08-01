// #1 tanpa parameter, berarti `MyDate` akan berisi tanggal dan waktu sekarang
const myDate = new Date();
console.log(myDate); // 2022-08-01T04:38:37.286Z

// #2 paramater tanggal dalam bentuk string, misal "January 01,2021"
let dateString = "January 01, 2021";
const date = new Date(dateString);
console.log(date); // 2020-12-31T17:00:00.000Z

// #3 parameter dalam bentuk number, misal 87400000
let milisecond = 87400000;
const tanggal = new Date(milisecond);
console.log(tanggal); // 1970-01-02T00:16:40.000Z

// #4 parameter tanggal dalam bentuk number (7 parameter), [hour, minute, second, milisecond] bersifat opsional
// const optionalDate = new Date(
//   year,
//   month,
//   date,
//   hour,
//   minute,
//   second,
//   milisecond
// );

const listOfContent = [1, 2, "President", {}];
console.log(Array.isArray(listOfContent));
// result is true

const splitText = "12:20:00".split(":").join(" ");
console.log(splitText);
// result is [ '12', '20', '00' ] => 12 20 00

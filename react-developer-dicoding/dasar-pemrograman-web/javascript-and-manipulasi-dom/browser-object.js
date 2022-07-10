/* 
history  : sebagai navigasi (go back atau go forward) history URL browser.
location : mendapatkan URL yang terdapat pada address bar browser.
alert()  : menampilkan dialog alert dengan pesan dan tombol "ok". 
close()  : menutup tab yang aktif.
confirm(): menampilkan dialog dengan pesan dan tombol "ok" dan "cancel".
           Method ini akan mengembalikan nilai boolean sesuai response dari pengguna
prompt() : menampilkan dialog dengan pesan dan teks input. Method ini akan mengembalikan 
           nilai string sesuai response dari pengguna
*/

const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");

const user = {
  name: {
    first: firstName,
    last: lastName,
  },
  language: language,
};

if (user.language === "English") {
  alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
  alert(
    "Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!"
  );
} else if (user.language === "Japanese") {
  alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
  alert(
    "Senang bertemu dengan anda " + user.name.first + " " + user.name.last + "!"
  );
}

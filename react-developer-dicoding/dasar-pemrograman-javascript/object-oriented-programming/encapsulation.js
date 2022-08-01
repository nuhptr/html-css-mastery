/* 
Kondisi dimana attribute atau method didalam class dibungkus dan bersifat privat 
*/

class Mail {
  constructor(author) {
    this._contacts = []; // membatasi akses dari luar kelas
    this.from = author;
  }

  sendMessage = (msg, to) => {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
  };

  showAllContacts() {
    return this._contacts;
  }
}

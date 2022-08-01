class Mail {
  constructor() {
    this.from = "pengirim@dicoding.com";
    this.contacts = [];
    this.yourOtherProperty = "The values";
  }

  sendMessage(msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // Menyimpan kontak baru
  }
}

const mail = new Mail();
mail.sendMessage("Hello", "penerima@dicoding.com"); // You send: Hello to penerima@dicoding.com from pengirim@dicoding.com
console.log(mail.contacts); // [ 'penerima@dicoding.com' ]

// TODO: Private field
class Email {
  constructor() {
    this._contacts = [];
    this.from = "";
  }
}

// TODO: Static Method
class BookContacts {
  static isValidPhone(phone) {
    return typeof phone === "number";
  }
}

let checkValid = BookContacts.isValidPhone(089890000000);
console.log(checkValid); // true

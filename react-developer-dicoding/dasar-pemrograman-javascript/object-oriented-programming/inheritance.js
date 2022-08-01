class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage = (msg, to) => {
    console.log(`You send message ${msg} to ${to} from ${this.from}`);
  };

  showAllContacts() {
    return this._contacts;
  }
}

class Whatsapp extends Mail {
  constructor(author) {
    super(author);
    this.username = "Dicoding";
    this.isBussinessAccount = true;
  }

  myProfile() {
    return `My name ${this.username}, is ${
      this.isBussinessAccount ? "Bussiness" : "Personal"
    }`;
  }
}

const wa1 = new Whatsapp("0801111000222");
console.log(wa1.myProfile());

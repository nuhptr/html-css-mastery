class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage = (msg, to) => {
    console.log(`You send message ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  };

  showAllContacts() {
    return this._contacts;
  }
}

class Whatsapp extends Mail {
  constructor(username, isBussinessAcccount, phoneNumber) {
    // TODO: Overriding Constructor
    super(phoneNumber);
    this.username = username;
    this.isBussinessAcccount = isBussinessAcccount;
  }

  // TODO: Overriding Method
  sendMessage(msg, to) {
    console.log("Send by WA");
  }
}

const wa = new Whatsapp("dicoding", true, "62811100");
console.log(wa.from); // 62811100
wa.sendMessage("Halo", "0890000000"); // You send message Halo to 0890000000 from 62811100

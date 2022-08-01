// Example : 1
class Mail {
  constructor() {
    this.from = "pengirim@dicoding.com";
  }

  sendMessage(msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
  }
}

const mail1 = new Mail();
mail1.sendMessage("Hallo", "penerima@dicoding.com"); // You send: Hallo to penerima@dicoding.com from pengirim@dicoding.com

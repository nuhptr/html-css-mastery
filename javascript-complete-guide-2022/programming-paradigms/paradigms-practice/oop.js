class Validator {}

class User {}

class UserInputForm {
   constructor() {
      this.form = document.getElementById("user-input");
      this.userNameInput = document.getElementById("username");
      this.passwordInput = document.getElementById("password");

      this.form.addEventListener("submit", this.signUpHandler.bind(this));
   }

   signUpHandler(event) {
      event.preventDefault();

      const enteredUserName = this.userNameInput.value;
      const enteredPassword = this.passwordInput.value;
   }
}

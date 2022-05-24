/**
 * @property {HTMLElementForm} form
 */
class RegisterValidation {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = document.querySelector("#form");

    if (this.form) {
      this.form.addEventListener("submit", this.handleSubmit);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit !");
    // Code
  }
}

new RegisterValidation();

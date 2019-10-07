<template>
  <b-container>
    <b-col class="main-content" xl="5" lg="6" md="8" sm="10">
      <h1 class="header">Register</h1>
      <div class="text-danger general-error d-none">Incorrect register information.</div>
      <b-form>
        <b-form-group label="Username:">
          <b-form-input id="username" required placeholder="Enter username"></b-form-input>
          <div class="message error-message text-danger" v-show="validateUsername()" id="username-error">
            Username must be between 4
            and 20 characters.
          </div>
        </b-form-group>

        <b-form-group label="Email address:">
          <b-form-input type="email" id="email" required placeholder="Enter email"></b-form-input>
          <div class="message error-message text-danger d-none" id="email-error">Invalid email.</div>
        </b-form-group>

        <b-form-group label="Password:">
          <b-form-input type="password" id="password" required placeholder="Enter password"></b-form-input>
          <div class="message error-message text-danger d-none" id="password-error">
            Password must be at least 8 characters,
            at least 1 uppercase letter, 1 lowercase letter and 1 number.
          </div>
        </b-form-group>

        <b-form-group label="Confirm Password:">
          <b-form-input type="password" id="confirmPassword" required placeholder="Enter confirm password">
          </b-form-input>
          <div class="message error-message text-danger d-none" id="confirmPassword-error">
            Confirm password
            must match password.
          </div>
        </b-form-group>

        <b-form-group id="checkbox">
          <b-form-checkbox-group>
            <b-form-checkbox required id="termsCheckbox" value="terms">
              I agree to the
              <b-link to="terms">Terms of Service Agreement</b-link>
            </b-form-checkbox>
            <div class="message error-message text-danger d-none" id="terms-error">
              You must accept the terms of service.</div>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" v-on:click="validateForm($event)" id="submit-button" 
        class="btn-lg" variant="primary">Register</b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
let usernameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let termsCheckboxValid = false;

export default {
  methods: {
    validateS() {
      return false;
    },
    isFormValid() {
      return ((usernameValid && emailValid && passwordValid 
      && confirmPasswordValid && termsCheckboxValid) == true);
    },

    checkSubmit() {
      document.getElementById("submit-button").disabled = !this.isFormValid();
    },

    addCustomValidation() {
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const termsCheckbox = document.getElementById("termsCheckbox");

      username.addEventListener("blur", () => {
        usernameValid = this.validateUsername(username.value);
        this.checkSubmit();
      });
      email.addEventListener("blur", () => {
        emailValid = this.validateEmail(email.value);
        this.checkSubmit();
      });
      password.addEventListener("blur", () => {
        passwordValid = this.validatePassword(password.value);
        this.checkSubmit();
      });
      confirmPassword.addEventListener("blur", () => {
        confirmPasswordValid = this.validateConfirmPassword(confirmPassword.value);
        this.checkSubmit();
      });
      termsCheckbox.addEventListener("change", () => {
        termsCheckboxValid = this.validateTermsCheckbox(termsCheckbox);
        this.checkSubmit();
      });
    },

    validateForm(event) {
      event.preventDefault();

      [].forEach.call(document.querySelectorAll(".message"), div => {
        if (!div.classList.contains("d-none")) {
          div.classList.add("d-none");
        }
      });

      if (!this.isFormValid()) {
        document.getElementsByClassName("general-error")[0].classList.remove("d-none");
        this.checkSubmit();
      } else {
        this.$router.push({name: 'home'});
      }
    },

    validateUsername() {
      console.log(this);
      // if (username.length < 4 || username.length > 20) {
      //   document.getElementById("username-error").classList.remove("d-none");
      //   usernameValid = false;
      //   return usernameValid;
      // } else {
      //   document.getElementById("username-error").classList.add("d-none");
      //   usernameValid = true;
      //   return usernameValid;
      // }
    },

    validateEmail(email) {
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if (!emailRegex.test(email)) {
        document.getElementById("email-error").classList.remove("d-none");
        emailValid = false;
        return emailValid;
      } else {
        document.getElementById("email-error").classList.add("d-none");
        emailValid = true;
        return emailValid;
      }
    },

    validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        document.getElementById("password-error").classList.remove("d-none");
        passwordValid = false;
        return passwordValid;
      } else {
        document.getElementById("password-error").classList.add("d-none");
        passwordValid = true;
        return passwordValid;
      }
    },

    validateConfirmPassword(confirmPassword) {
      if (confirmPassword != password.value) {
        document
          .getElementById("confirmPassword-error")
          .classList.remove("d-none");
        confirmPasswordValid = false;
        return confirmPasswordValid;
      } else {
        document
          .getElementById("confirmPassword-error")
          .classList.add("d-none");
        confirmPasswordValid = true;
        return confirmPasswordValid;
      }
    },

    validateTermsCheckbox(termsCheckbox) {
      if (!termsCheckbox.checked) {
        document.getElementById("terms-error").classList.remove("d-none");
        termsCheckboxValid = false;
        return termsCheckboxValid;
      } else {
        document.getElementById("terms-error").classList.add("d-none");
        termsCheckboxValid = true;
        return termsCheckboxValid;
      }
    }
  },
  mounted() {
    this.addCustomValidation()
  },
  data: {
    myModel: true
  }
}
</script>

<style scoped>
@import "../assets/css/generalForm.css";
</style>

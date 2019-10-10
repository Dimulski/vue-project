<template>
  <b-container>
    <b-col class="main-content" v-show="formUnsubmitted" xl="5" lg="6" md="8" sm="10">
      <h1 class="header">Register</h1>
      <div class="text-danger general-error" v-if="shouldShowGeneralError">Incorrect register information.</div>
      <b-form>
        <b-form-group 
          label="Username:" 
          :invalid-feedback="invalidUsername"
          :state="usernameState">
          <b-form-input 
            id="username"
            v-model="username"
            :state="usernameState" 
            trim placeholder="Enter username">
          </b-form-input>
        </b-form-group>

        <b-form-group 
          label="Email address:"
          :invalid-feedback="invalidEmail"
          :state="emailState">
          <b-form-input 
            type="email" 
            id="email"
            v-model="email"
            :state="emailState"
            placeholder="Enter email">
          </b-form-input>
        </b-form-group>

        <b-form-group 
          label="Password:"
          :invalid-feedback="invalidPassword"
          :state="passwordState">
          <b-form-input 
            type="password" 
            id="password" 
            v-model="password"
            :state="passwordState"
            required 
            placeholder="Enter password">
          </b-form-input>
        </b-form-group>

        <b-form-group 
          label="Confirm Password:"
          :invalid-feedback="invalidConfirmPassword"
          :state="confirmPasswordState">
          <b-form-input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword"
            :state="confirmPasswordState"
            required 
            placeholder="Enter confirm password">
          </b-form-input>
        </b-form-group>

        <b-form-group id="checkbox"
          :invalid-feedback="invalidTerms"
          :state="termsState">
          <b-form-checkbox
            id="checkbox-1"
            v-model="terms"
            value="accepted"
            unchecked-value="not_accepted">
            I agree to the <b-link to="terms">Terms of Service</b-link>.
          </b-form-checkbox>
        </b-form-group>

        <b-button type="submit" v-on:click="submitForm($event)" id="submit-button" 
        class="btn-lg" variant="primary" :disabled="!formState">Register</b-button>
      </b-form>
    </b-col>
    
    <transition name="fadeUp"
      :duration="{ enter: 1800, leave: 800 }"
      v-on:after-enter="showMessage = false" 
      v-on:after-leave="redirectToHome">
      <p id="message-sent" v-if="showMessage">Message sent!</p>
    </transition>
  </b-container>
</template>

<script>
import emailField from '../mixins/emailField'

export default {
  data() {
    return {
      username: null,
      password: null,
      confirmPassword: null,
      terms: null,
      formUnsubmitted: true,
      showMessage: false
    }
  },
  mixins: [emailField],
  computed: {
    usernameState() {
      if (this.username == null) {
        return null;
      } else {
        return this.username.length >= 4 && this.username.length <= 20 ? true : false;
      }
    },
    invalidUsername() {
      if (this.username == null) {
        return ''
      } else if (this.username.length > 4 && this.username.length <= 20) {
        return ''
      } else if (this.username.length > 0 || this.username.length > 20) {
        return 'Username must be between 4 and 20 characters.'
      } else {
        return 'Please enter your desired username.'
      }
    },
    passwordState() {
      if (this.password == null) {
        return null;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return passwordRegex.test(this.password)
    },
    invalidPassword() {
      if (this.password == null) {
        return '';
      } else if (this.password.length > 0 && this.password.length < 40) {
        return 'Password must be at least 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.'
      } else if (this.password.length > 40) {
        return 'Password must be less than 40 characters.'
      } else {
        return 'Please enter your desired password.'
      }
    },
    confirmPasswordState() {
      if (this.confirmPassword == null) {
        return null;
      }
      return this.confirmPassword == this.password && this.confirmPassword.length > 0
    },
    invalidConfirmPassword() {
      if (this.confirmPassword == null) {
        return '';
      } else if (this.confirmPassword.length > 0) {
        return 'Confirm password must match password.'
      } else {
        return 'Please enter your password again.'
      }
    },
    termsState() {
      if (this.terms == null) {
        return null;
      }
      return this.terms == "accepted" ? true : false
    },
    invalidTerms() {
      if (this.terms == null) {
        return '';
      } else if (!this.termsState) {
        return 'You must agree to the Terms of Service'
      }
    },
    formState() {
      return ((this.usernameState && this.emailState && this.passwordState
      && this.confirmPasswordState && this.termsState) == true)
    },
    shouldShowGeneralError() {
      if (
        this.username == null ||
        this.email == null ||
        this.password == null ||
        this.confirmPassword == null ||
        this.terms == null) {
          return false;
        } else {
          return !this.formState;
        }
    }
  },
  methods: {
    startLeaving() {
      this.showMessage = false;
    },
    redirectToHome() {
      this.$router.push({name: 'home'});
    },
    submitForm(event) {
      event.preventDefault();
      this.formUnsubmitted = false;
      this.showMessage = true;
    }
  }
}
</script>

<style scoped>
@import "../assets/css/generalForm.css";

#message-sent {
  color: mediumseagreen;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 18rem;
}
</style>

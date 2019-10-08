<template>
  <b-container>
    <b-col class="main-content" xl="5" lg="6" md="8" sm="10">
      <h1 class="header">Contact Form</h1>
      <div class="text-danger general-error" v-if="!formState">Please fill out the fields.</div>
      <b-form>
        <b-form-group 
          label="Name:" 
          :invalid-feedback="invalidName"
          :state="nameState">
          <b-form-input 
            id="name"
            v-model="name"
            :state="nameState" 
            trim placeholder="Enter name">
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
          label="Phone number:"
          :invalid-feedback="invalidPhone"
          :state="phoneState">
          
          <!-- <vue-tel-input :class="phoneStateClasses" v-model="phone.number" @onInput="updateNumber"></vue-tel-input> -->
          <vue-tel-input v-bind:class="[this.phone.valid ? 'form-control is-valid' : 'form-control is-invalid']" v-model="phone.number" @onInput="updateNumber"></vue-tel-input>

        </b-form-group>
        

        <b-button type="submit" v-on:click="submitForm($event)" id="submit-button" 
        class="btn-lg" variant="primary" :disabled="!formState">Submit</b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
import { log } from 'util';
export default {
  data() {
    return {
      name: null,
      email: null,
      phone: {
        number: null,
        fullNumber: null,
        valid: null
      },
      message: ''
    }
  },
  computed: {
    nameState() {
      if (this.name == null) {
        return null
      }
      return this.name.length >= 4 && this.name.length <= 20 ? true : false;
    },
    invalidName() {
      if (this.name == null) {
        return ''
      } else if (this.name.length > 4 && this.name.length <= 20) {
        return ''
      } else if (this.name.length > 0 || this.name.length > 20) {
        return 'Name must be between 4 and 20 characters.'
      } else {
        return 'Please enter your name.'
      }
    },

    emailState() {
      if (this.email == null) {
        return null
      }
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return emailRegex.test(this.email)
    },
    invalidEmail() {
      if (this.email == null) {
        return ''
      }
      if (this.email.length > 0 && this.email.length < 40) {
        return 'Invalid email.'
      } else {
        return 'Please enter your email address.'
      }
    },

    phoneState() {
      if (this.phone.valid == null) {
        return null
      }
      return this.phone.valid
    },
    invalidPhone() {
      if (this.phone.valid == null) {
        return ''
      } else if (this.phone.number === undefined) {
        return `${this.phone.number} is not a valid number.`
      } else if (!this.phone.isValid) {
        return `${this.phone.fullNumber} is not a valid number.`
      }
    },
    phoneStateClasses() {
      if (this.phone.valid) {
        return "form-control is-valid"
      } else {
        return "form-control is-invalid"
      }
      
    },

    messageState() {
      if (this.message == null) {
        return null
      }
      return this.message.length >= 4 && this.message.length <= 20
    },

    formState() {
      return ((this.nameState && this.emailState && this.phoneState && this.messageState) == true)
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      if (this.formState) {
        this.$router.push({name: 'home'});
      }
    },
    updateNumber({number, isValid, country}) {
      this.phone.fullNumber = `+${country.dialCode} ${this.phone.number}`;
      this.phone.valid = isValid;
    }
  }
}
</script>

<style scoped>
@import "../assets/css/generalForm.css";

vue-tel-input:focus {
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;
}
</style>

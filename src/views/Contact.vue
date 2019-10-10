<template>
  <b-container>
    <b-col class="main-content" xl="5" lg="6" md="8" sm="10">
      <h1 class="header">Contact</h1>
      <div class="text-danger general-error" v-if="shouldShowGeneralError">Please fill out the fields.</div>
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
          <vue-tel-input 
            :state="phoneState"
            v-bind:class="[this.phone.valid == null ? 'form-control is-null' :  (this.phone.valid == true ? 'form-control is-valid' : 'form-control is-invalid')]"
            v-model="phone.number" 
            @onInput="updateNumber">
          </vue-tel-input>
        </b-form-group>
        
        <b-form-group 
          label="Message:"
          :invalid-feedback="invalidMessage"
          :state="messageState">
          <b-form-textarea
            id="message"
            v-model="message"
            :state="messageState"
            placeholder="Enter your message">
          </b-form-textarea>
        </b-form-group>

        <b-button type="submit" v-on:click="submitForm($event)" id="submit-button" 
        class="btn-lg" variant="primary" :disabled="!formState">Submit</b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
import emailField from '../mixins/emailField.js'

export default {
  data() {
    return {
      name: null,
      phone: {
        number: null,
        fullNumber: null,
        valid: null
      },
      message: null
    }
  },
  mixins:[emailField],
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

    messageState() {
      if (this.message == null) {
        return null
      }
      return this.message.length >= 4 && this.message.length <= 20
    },
    invalidMessage() {
      if (this.message == null) {
        return ''
      } else if (this.message.length < 4 || this.message.length > 500) {
        return 'The message must be between 4 and 500 characters.'
      }
    },
    formState() {
      return ((this.nameState && this.emailState && this.phoneState && this.messageState) == true)
    },
    shouldShowGeneralError() {
      if (
        this.name == null ||
        this.email == null ||
        this.phone.valid == null ||
        this.message == null) {
          return false;
        } else {
          return !this.formState;
        }
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

.vue-tel-input.is-null:focus-within {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  border-color: #80bdff;
}

.vue-tel-input.is-valid:focus-within {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  border-color: #28a745;
}

.vue-tel-input.is-invalid:focus-within {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  border-color: #dc3545;
}

.vti__dropdown {
  padding: 0px !important;
}

textarea {
  height: 150px !important;
}
</style>

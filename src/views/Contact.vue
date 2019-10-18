<template>
  <b-container>
    <b-col class="main-content" xl="5" lg="6" md="8" sm="10">
      <content-header>Contact</content-header>
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
          ref="phoneNumber"
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

        <b-button 
        type="submit" 
        v-on:click="submitForm($event)" 
        id="submit-button" 
        class="btn-lg" 
        variant="primary" 
        :disabled="!formState">
        Submit
        </b-button>
      </b-form>
    </b-col>

    <transition name="fadeUp"
      :duration="{ enter: 1800, leave: 1800 }"
      v-on:after-enter="showMessage = false">
      <p id="message-sent" v-if="showMessage">Message Sent!</p>
    </transition>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import emailField from '../mixins/emailField.js'
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      // name: state => state.contact.name,
      // phone: state => state.contact.phone,
      // message: state => state.contact.message,
      // showMessage: state => state.contact.showMessage
    }),
    ...mapGetters({
      nameState: 'contact/nameState',
      invalidName: 'contact/invalidName',
      phoneState: 'contact/phoneState',
      invalidPhone: 'contact/invalidPhone',
      messageState: 'contact/messageState',
      invalidMessage: 'contact/invalidMessage',
      formState: 'contact/formState',
      shouldShowGeneralError: 'contact/shouldShowGeneralError'
    }),
    name: {
      get() { return this.$store.state.name },
      set(newName) { this.$store.dispatch('setName', newName)}
    },
    phone: {
      get() { return this.$store.state.phone },
      set(newPhone) { this.$store.dispatch('setPhone', newPhone) }
    },
    message: {
      get() { return this.$store.state.message },
      set(newMessage) { this.$store.dispatch('setMessage', newMessage)}
    },
    showMessage: {
      get() { return this.$store.state.showMessage },
      set(value) { this.$store.dispatch('setShowMessage', value) }
    }
  },
  mixins:[emailField],
  components: {
    ContentHeader
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.clearForm();
      this.showMessage = true;
    },
    updateNumber({number, isValid, country}) {
      this.phone.fullNumber = `+${country.dialCode} ${this.phone.number}`;
      this.phone.valid = isValid;
    },
    clearForm() {
      this.name = null
      this.phone.number = ''
      this.phone.fullNumber = ''
      this.phone.valid = null
      this.message = null
      this.email = null
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

#message-sent {
  position: absolute;
  top: 50px;
  right: 50px;
  color: mediumseagreen;
  font-size: 2rem;
  text-align: right;
  margin-top: 2rem;
}
</style>

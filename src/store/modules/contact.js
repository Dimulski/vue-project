const state = {
  name: null,
  phone: {
    number: null,
    fullNumber: null,
    valid: null
  },
  message: null,
  showMessage: null
}

const getters = {
  nameState: state => {
    if (state.name == null) {
      return null
    }
    return state.name.length >= 4 && state.length <= 20 ? true : false;
  },
  invalidName: state => {
    if (state.name == null || (state.name.length > 4 && state.name.length <= 20)) {
      return ''
    } else if (state.name.length > 0 || state.name.length > 20) {
      return 'Name must be between 4 and 20 characters.'
    } else {
      return 'Please enter your name.'
    }
  },
  phoneState: state => {
    if (state.phone.valid == null) {
      return null
    }
    return state.phone.valid
  },
  invalidPhone: state => {
    if (state.phone.valid == null) {
      return ''
    } else if (state.phone.number === undefined) {
      return `${state.phone.number} is not a valid number.`
    } else if (!state.phone.isValid) {
      return `${state.phone.fullNumber} is not a valid number.`
    }
  },
  messageState: state => {
    if (state.message == null) {
      return null
    }
    return state.message.length >= 4 && state.message.length <= 20
  },
  invalidMessage: state => {
    if (state.message == null) {
      return ''
    } else if (state.message.length < 4 || state.message.length > 500) {
      return 'This message must be between 4 and 500 characters'
    }
  },
  formState: state => {
    return ((state.nameState && state.emailState && state.phoneState && state.messageState) == true)
  },
  shouldShowGeneralError: state => {
    if (state.name == null || state.email == null || state.phone.valid == null || state.message == null) {
      return false
    } else {
      return !state.formState
    }
  }
}

const actions = {
}

const mutations = {
  setName (state, newName) {
    state.name = newName
  },
  set
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

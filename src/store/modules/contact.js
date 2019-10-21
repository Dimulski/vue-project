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
  
}

const actions = {
}

const mutations = {
  setName (state, newName) {
    state.name = newName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

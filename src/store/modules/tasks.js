import axios from 'axios'

// initial state
const state = {
  tasks: []
}

const getters = {

}

const actions = {
  loadSelectedTasks ({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        commit('setTasks', response.data.filter(task => task.id > 0 && task.id < 10))
      })
  }
}

const mutations = {
  setTasks (state, tasks) {
    state.tasks = tasks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

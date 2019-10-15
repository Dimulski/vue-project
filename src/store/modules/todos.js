const state = {
  todos: [],
  perPage: 10,
  currentPage: 1,
  rows: 0,
  fields: ['id', 'title', 'is_completed', 'edit', 'delete'],
  completed: false
}

const getters = {
  currentPage (state) {
    console.log(state.currentPage)
    return state.currentPage
  }
}

const actions = {
  loadAllTodos ({ commit }) {
    fetch('./todos.json').then(response => response.json().then(todos => {
      commit('setTodos', todos)
      commit('setRows', todos.length)
    }))
  },
  // loadAllTodos ({ commit }) {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/todos`)
  //     .then(response => {
  //       commit('setTodos', response.data)
  //       commit('setRows', response.data.length)
  //     })
  // },
  setCurrentPage ({ commit }, currentPage) {
    commit('setCurrentPage', currentPage)
  },
  setCompleted ({ commit }, completed) {
    commit('setCompleted', completed)
  }
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  setCurrentPage (state, currentPage) {
    state.currentPage = currentPage
  },
  setCompleted (state, completed) {
    state.completed = completed
  },
  setRows (state, rows) {
    state.rows = rows
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import axios from 'axios'

const state = {
  tasks: [],
  itemsPerRow: 3,
  rows: 3
}

const getters = {
  getRows: state => {
    return Math.ceil(state.tasks.length / state.itemsPerRow)
  },
  getItemsForRow: (state) => (row) => {
    let items = []
    let startingIndex = (state.itemsPerRow * (row - 1))
    for (let i = startingIndex, y = 0; i < startingIndex + state.itemsPerRow; i++, y++) {
      if (state.tasks[i]) {
        items[y] = state.tasks[i]
      }
    }

    return items
  }
}

const actions = {
  loadSelectedTasks ({ commit }) {
    axios
      .get('http://localhost:8080/api/tasks')
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

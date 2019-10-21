const state = {
  todos: [],
  perPage: 10,
  currentPage: 1,
  rows: 0,
  fields: [{key: 'id', sortable: true }, 'title', 'is_completed', 'edit', 'delete'],
  sortBy: 'id',
  editField: null,
  editFieldEditMode: false,
  todoBeingEdited: {}
}

const getters = {
  currentPage (state) {
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
  setCurrentPage ({ commit }, currentPage) {
    commit('setCurrentPage', currentPage)
  },
  setCompleted ({ commit }, completed) {
    commit('setCompleted', completed)
  },
  setEditField ({ commit }, editField) {
    commit('setEditField', editField)
  },
  addTodo ({ commit }, title) {
    commit('addTodo', title)
  },
  setEditFieldEditMode ({ commit }, mode) {
    commit('setEditFieldEditMode', mode)
  },
  setTodoBeingEdited ({ commit }, todo) {
    commit('setTodoBeingEdited', todo)
  },
  saveTodo ({ commit }, newTitle) {
    commit('saveTodo', newTitle)
  },
  resetEdit ({ commit }) {
    commit('resetEdit')
  },
  deleteTodo ({ commit }, todo) {
    commit('deleteTodo', todo)
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
  },
  setEditField (state, editField) {
    state.editField = editField
  },
  addTodo (state, title) {
    state.todos.push(
      {
        'userId': 1,
        'id': state.todos.length + 1,
        'title': title,
        'completed': false
      })
    state.editField = null
  },
  setEditFieldEditMode (state, mode) {
    state.editFieldEditMode = mode
  },
  setTodoBeingEdited (state, todo) {
    state.todoBeingEdited = todo
  },
  saveTodo (state, newTitle) {
    state.todos[state.todoBeingEdited.id - 1].title = newTitle
  },
  resetEdit (state) {
    state.editField = null
    state.editFieldEditMode = false
    state.todoBeingEdited = {}
  },
  deleteTodo (state, todoToDelete) {
    state.todos.splice(state.todos.findIndex(todo => todo.id === todoToDelete.id), 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

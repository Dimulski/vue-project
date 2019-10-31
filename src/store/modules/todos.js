import axios from 'axios'

const state = {
  todos: [],
  perPage: 10,
  currentPage: 1,
  rows: 0,
  fields: [{ key: 'id', sortable: true }, 'title', 'is_completed', 'edit', 'delete'],
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
    axios
      .get('http://localhost:8080/api/todos')
      .then(response => {
        commit('setTodos', response.data)
        commit('setRows', response.data.length)
      })
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
    axios.post('http://localhost:8080/api/todos',
      {'title': title,'completed': false}
    )
  },
  setEditFieldEditMode ({ commit }, mode) {
    commit('setEditFieldEditMode', mode)
  },
  setTodoBeingEdited ({ commit }, todo) {
    commit('setTodoBeingEdited', todo)
  },
  saveTodoTitle ({ commit }, newTitle) {
    commit('saveTodoTitle', newTitle)
  },
  resetEdit ({ commit }) {
    commit('resetEdit')
  },
  deleteTodo ({ commit }, todo) {
    commit('deleteTodo', todo)
    axios.delete(`http://localhost:8080/api/todos/${todo.id}`)
  },
  saveTodo({}, todo) {
    axios.put(`http://localhost:8080/api/todos/${todo.id}`,
      {'id': todo.id,'title': todo.title,'completed': todo.completed}
    )
  },
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
  saveTodoTitle (state, newTitle) {
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

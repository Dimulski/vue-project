import axios from 'axios'

const state = {
  post: Object
}

const getters = {
  
}

const actions = {
  loadPost ({ commit }, postId) {
    axios
      .get(`http://localhost:8080/api/posts/${postId}`)
      .then(response => {
        commit('setPost', response.data)
      })
  }
}

const mutations = {
  setPost (state, post) {
    state.post = post
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

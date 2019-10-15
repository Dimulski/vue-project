import axios from 'axios'

const state = {
  posts: [],
  post: {}
}

const getters = {
}

const actions = {
  loadAllPosts ({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('setPosts', response.data)
      })
  },
  loadSelectedPosts ({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('setPosts', response.data.filter(post => post.id > 10 && post.id < 23))
      })
  },
  fetchPostById ({ commit }, postId) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        commit('setPost', response.data)
      })
  },
  loadPost ({ commit }, post) {
    commit('setPost', post)
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
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

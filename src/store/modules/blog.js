import axios from 'axios'

const state = {
  posts: [],
  post: null
}

const getters = {
  // getPostById: (state) => (id) => {
  //   return state.posts.filter(post => post.id === id)
  // }
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
  loadPost ({ commit }, postId) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        commit('setPost', response.data)
      })
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

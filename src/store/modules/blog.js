import axios from 'axios'

const state = {
  posts: [],
  post: {},
  itemsPerRow: 3,
  rows: 3
}

const getters = {
  getRows: state => {
    return Math.ceil(state.posts.length / state.itemsPerRow)
  },
  getItemsForRow: (state) => (row) => {
    let items = []
    let startingIndex = (state.itemsPerRow * (row - 1))
    for (let i = startingIndex, y = 0; i < startingIndex + state.itemsPerRow; i++, y++) {
      if (state.posts[i]) {
        items[y] = state.posts[i]
      }
    }

    return items
  }
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
        commit('setPosts', response.data.filter(post => post.id > 10 && post.id < 22))
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

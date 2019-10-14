import axios from 'axios'

const state = {
  photos: []
}

const getters = {
}

const actions = {
  load35RandomPhotos ({ commit }) {
    commit('setPhotos', [])
    get35Random([...Array(50).keys()]).forEach(photoId => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(response => {
          commit('addPhoto', response.data)
        })
    })
  }
}

const mutations = {
  addPhoto (state, photo) {
    state.photos.push(photo)
  },
  setPhotos (state, photos) {
    state.photos = photos
  }
}

const get35Random = (elements) => {
  let selected = []
  while (selected.length <= 35) {
    const randomElement = Math.ceil(Math.random() * elements.length)
    if (selected.indexOf(randomElement) === -1) {
      selected.push(randomElement)
    }
  }
  return selected
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

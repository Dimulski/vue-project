import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import post from './modules/post'
import tasks from './modules/tasks'
import photos from './modules/photos'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    blog,
    post,
    tasks,
    photos,
    todos
  }
})

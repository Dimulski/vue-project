import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
import Post from './views/Post.vue'
import Tasks from './views/Tasks.vue'
import Photos from './views/Photos.vue'
import Todos from './views/Todos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    }
  ]
})

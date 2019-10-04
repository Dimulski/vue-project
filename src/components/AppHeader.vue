<template>
  <header>
    <b-navbar class="col-sm-8" toggleable="lg" type="light">
    <app-logo/>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  class="nav-link" to="/blog" active-class="active">Blog</b-nav-item>
        <b-nav-item  class="nav-link" to="/contacts" active-class="active">Contacts</b-nav-item>
        <b-nav-item  class="nav-link" to="/tasks" active-class="active">Tasks</b-nav-item>
        <b-nav-item  class="nav-link" to="/photos" active-class="active">Photos</b-nav-item>
        <b-nav-item  class="nav-link" to="/todos" active-class="active">To-Do's</b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link class="nav-link"
            active-class="active" to="/register">Register</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'app-header',
  components: {
    AppLogo
  }
}
</script>

<style scoped>
header {
  box-shadow: 0 -1px 15px rgba(0,0,0,0.25)
}



a:hover {
  text-decoration: none;
}
</style>
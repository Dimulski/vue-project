<template>
  <b-navbar-brand><router-link to="/">vue-project</router-link></b-navbar-brand>
</template>
<script>
export default {
  name: 'app-logo'
}
</script>

<style scoped>
a {
  font-size: 22px;
  color: lightseagreen !important;
}

a:hover {
  color: darkseagreen;
  text-shadow: 0px 0px 0px lightslategray;
  transition: 0.5s ease;
  text-decoration: none;
}

img {
  width: 1.3rem;
  margin-right: 5px;
}
</style>
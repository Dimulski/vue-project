<template>
  <b-container>
    <b-col class="main-content" xl="12">
      <h1 id="title">{{ post.title | capitalize}}</h1>
      <p id="body">{{ post.body | capitalize}}</p>
    </b-col>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then(response => (this.post = response.data))
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-wrap: wrap;
}

.card {
  list-style: none;
  flex: 0 0 30%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}

h1 {
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
}
</style>
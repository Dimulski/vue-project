<template>
  <b-container>
    <b-col class="main-content" xl="12">
      <h1 class="header">Blog Posts</h1>
        <b-card v-for="post in posts" :key="post.id" :title='post.title | capitalize'>
          <b-card-text>{{ post.body | capitalize | limit50}}...</b-card-text>
          <b-button :to="`post?id=${post.id}`" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-col>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    limit50(value) {
      if (!value) return ''
      value = value.toString()
      return value.substring(1, 59)
    }
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data))
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
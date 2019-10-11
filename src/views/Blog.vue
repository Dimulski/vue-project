<template>
  <b-container class="main-content" xl="12">
    <b-row>
      <content-header>Blog Posts</content-header>
      <b-col cols="12" sm="6" lg="4" xl="4" v-for="post in posts" :key="post.id" >
        <b-card :title='post.title | capitalize' align="left">
          <b-card-text>{{ post.body | capitalize | limit50Characters }}...</b-card-text>
          <b-button :to="`posts/${post.id}`" variant="primary">Read More</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data.filter(task => task.id > 10 && task.id < 23)
      })
  },
  components: {
    ContentHeader
  }
}
</script>

<style scoped>
.card {
  height: 110% !important;
}

div [class*='col-'] {
  padding-bottom: 40px !important;
}

.btn {
  margin-top: 10px !important;
  position: absolute !important;
  bottom: 15px !important;
  right: 15px !important;
}

h1 {
  width: 110% !important;
  text-align: center;
}
</style>
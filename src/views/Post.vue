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
import { mapState, mapGetters, mapActions } from 'vuex'
import { isNullOrUndefined } from 'util'

export default {
  computed: mapState({
    posts: state => state.blog.posts,
    post: state => state.blog.post
  }),
  mounted() {
    const postId = this.$route.params.id;
    if (this.posts.length < 1) {
      console.log('No posts loaded. Fetching single post')
      this.fetchPostById(postId)
    } else {
      console.log('Loading post from posts[]')
      this.loadPost(this.posts.filter(post => post.id == postId)[0])
    }
  },
  methods: {
    ...mapActions({
      fetchPostById: 'blog/fetchPostById',
      loadPost: 'blog/loadPost'
    })
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
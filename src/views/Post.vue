<template>
  <b-container>
    <b-col class="main-content" xl="12">
      <h1 id="title">{{ post | capitalize}}</h1>
      <p id="body">{{ post | capitalize}}</p>
    </b-col>
  </b-container>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
import { isNullOrUndefined } from 'util';

export default {
  computed: mapState({
    post: state => state.blog.post
  }),
  mounted() {
    console.log(this.post)
    const postId = this.$route.params.id;
    console.log(postId)
    if (isNullOrUndefined(this.post)) {
      this.$store.dispatch('blog/loadPost', postId)
      setTimeout(() => {
        console.log(this.post)
      }, 3000);
    } else {
      
    }
    this.$store.dispatch('blog/printId')
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
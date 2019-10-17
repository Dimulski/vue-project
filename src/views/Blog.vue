<template>
  <main-content title="Blo">
    <template v-slot:header>g</template>
    <template v-slot:body>
      <b-row v-for="row in rows" :key="row">
        
      </b-row>
      <!-- <b-card :title='item.title | capitalize' align="left">
        <b-card-text>{{ item.body | capitalize | limit50Characters }}...</b-card-text>
        <b-button :to="`posts/${item.id}`" variant="primary">Read More</b-button>
      </b-card> -->
    </template>
    <!-- <template v-slot:body :items-data="posts"></template> -->
  </main-content>
  <!-- <b-container class="main-content" xl="12">
    <content-header>Blog Posts</content-header>
    <b-row v-for="n in Math.ceil(posts.length / 3)" :key="n">
      <b-col v-for="">

      </b-col>
    </b-row>
      <content-box v-on:custom-hovered="sayHi(post.title)" v-for="post in posts" :key="post.id">
        <b-card :title='post.title | capitalize' align="left">
          <b-card-text>{{ post.body | capitalize | limit50Characters }}...</b-card-text>
          <b-button :to="`posts/${post.id}`" variant="primary">Read More</b-button>
        </b-card>
      </content-box>
    </b-row>
  </b-container> -->
</template>

<script>
import MainContent from '@/components/MainContent.vue'
// import MainContent from '.././components/MainContent.vue'
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    posts: state => state.blog.posts,
    itemsPerRow: state => state.blog.itemsPerRow,
    rows: state => state.blog.rows
  }),
  mounted () {
    this.$store.dispatch('blog/loadSelectedPosts')
    console.log(this.rows)
    console.log(this.itemsPerRow)
  },
  components: {
    MainContent
  },
  methods: {
    sayHi (title) {
      console.log(`${title} was hovered`)
    }
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
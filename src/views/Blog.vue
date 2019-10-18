<template>
  <main-content title="Blo">
    <template v-slot:header>g</template>
    <template v-slot:body>
      <b-row v-for="row in getRows" :key="row">
        <list-item v-on:my-custom-emit="logEmitter(item.title)" v-for="item in getItemsPerRowFromStore(row)" :key="item.id">
          <b-card :title='item.title | capitalize' align="left">
            <b-card-text>{{ item.body | capitalize | limit50Characters }}...</b-card-text>
            <b-button :to="`posts/${item.id}`" variant="primary">Read More</b-button>
          </b-card>
        </list-item>
      </b-row>
    </template>
  </main-content>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import ListItem from '@/components/ListItem.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: state => state.blog.posts,
      itemsPerRow: state => state.blog.itemsPerRow
    }),
    ...mapGetters({
      getRows: 'blog/getRows',
      getItemsForRow: 'blog/getItemsForRow'
    })
  },
  mounted () {
    this.$store.dispatch('blog/loadSelectedPosts')
  },
  components: {
    MainContent,
    ListItem
  },
  methods: {
    logEmitter (title) {
      console.log(`${title} emitted an event`)
    },
    getItemsPerRowFromStore(row) {
      return this.getItemsForRow(row)
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
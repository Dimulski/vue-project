<template>
  <main-content title="Photos">
    <template v-slot:body>
      <b-row v-for="row in getRows" :key="row">
        <list-item v-for="item in getItemsPerRowFromStore(row)" :key="item.id">
          <b-card-img-lazy :top='true' :offset='360' :src='item.url' alt="Image" bottom></b-card-img-lazy>
          <b-card-title>{{ item.title }}</b-card-title>
        </list-item>
      </b-row>
    </template>
  </main-content>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import ListItem from '@/components/ListItem.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      photos: state => state.photos.photos,
    }),
    ...mapGetters({
      getRows: 'photos/getRows',
      getItemsForRow: 'photos/getItemsForRow'
    })
  },
  mounted () {
    this.$store.dispatch('photos/load35RandomPhotos')
  },
  methods: {
    getItemsPerRowFromStore(row) {
      return this.getItemsForRow(row)
    }
  },
  components: {
    MainContent,
    ListItem
  }
}
</script>

<style scoped>
.card {
  height: 100% !important;
}

div [class*='col-'] {
  padding-bottom: 40px !important;
}

h1 {
  width: 110% !important;
  text-align: center;
  margin-bottom: 25px;
}
</style>
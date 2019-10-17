<template>
  <main-content>
    <!-- <template v-slot:title>Photos</template>
    <template v-slot:body v-for="photo in photos" :key="photo.id">
        <b-card-img-lazy :top='true' :offset='360' :src='photo.url' alt="Image" bottom></b-card-img-lazy>
        <b-card-title>{{ photo.title }}</b-card-title>
    </template>
    <template v-slot:body>
        nothing lol
    </template> -->
  </main-content>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    photos: state => state.photos.photos
  }),
  mounted () {
    this.$store.dispatch('photos/load35RandomPhotos')
  },
  components: {
    MainContent
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
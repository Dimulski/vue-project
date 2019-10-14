<template>
  <b-container class="main-content" xl="12">
    <b-row>
      <content-header>Photos</content-header>
      <b-col cols="12" sm="6" lg="4" xl="3" v-for="photo in photos" :key="photo.id">
        <b-card-img-lazy :top='true' :offset='360' :src='photo.url' alt="Image" bottom></b-card-img-lazy>
        <b-card-title>{{ photo.title }}</b-card-title>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    photos: state => state.photos.photos
  }),
  mounted () {
    this.$store.dispatch('photos/load35RandomPhotos')
  },
  components: {
    ContentHeader
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
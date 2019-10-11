<template>
  <b-container class="main-content" xl="12">
    <b-row>
      <content-header>Photos</content-header>
      <b-col v-lazy-container="{ selector: 'placeholder' }" cols="12" sm="6" lg="4" xl="3" v-for="photo in photos" :key="photo.id">
      
          <img class="card-img-top" :src='photo.url'/>
          <div class="photo-body">photo body btw</div>
      </b-col>
      <!-- </div>
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/300/300/?image=41"/>
          <
          </div> -->
        
        <!-- <b-card-img-lazy :top='true' :offset='360' :src='photo.url' alt="Image" bottom></b-card-img-lazy>
        <b-card-title>{{ photo.title }}</b-card-title> -->
        <!-- <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card> -->

    </b-row>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import axios from 'axios'

export default {
  data() {
    return {
      photoIds: [],
      photos: [],
      blankUrl: '../assets/loading.gif'
    }
  },
  components: {
    ContentHeader
  },

  mounted() {
    // this.photoIds = this.get12random([...Array(50).keys()])
    
    this.get12random([...Array(50).keys()]).forEach(photoId => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(response => {
          this.photos.push(response.data)
        })
    })
  },
  methods: {
    get12random(elements) {
      let selected = [];
      while (selected.length < 36) {
          const randomElement = Math.floor(Math.random() * elements.length + 1);
          if (selected.indexOf(randomElement) === -1) {
              selected.push(randomElement);
          }
      }
      return selected;
    }
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
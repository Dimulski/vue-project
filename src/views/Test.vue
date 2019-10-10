
<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100" style="background-color:#ff0000;">
        Test card content. 
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100" style="background-color:#00ff00;">
        Test card content. Test card content. Test card content. Test card content. 
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100" style="background-color:#0000ff;">
        Test card content. Test card content. Test card content. Test card content. Test card content. Test card content. Test card content. Test card content. 
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="card h-100" style="background-color:#0f0f0f;">
        Test card content. 
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
  }
}
</script>

<style scoped>


</style>
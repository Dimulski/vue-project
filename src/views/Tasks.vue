<template>
  <b-container class="main-content" xl="12">
    <b-row>
      <content-header>Tasks</content-header>
      <content-box v-for="task in tasks" :key="task.id">
        <b-card 
          :class="[task.completed ? 'completed' :  'in-progress']"
          :title='task.title' align="left">
          <b-card-text>{{ task.completed ? 'Completed' : 'In Progress' }}</b-card-text>
        </b-card>
      </content-box>
    </b-row>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
// import ContentBox from '@/components/ContentBox.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    tasks: state => state.tasks.tasks
  }),
  mounted () {
    this.$store.dispatch('tasks/loadSelectedTasks');
  },
  components: {
    ContentHeader,
    // ContentBox
  }
}
</script>

<style scoped>
.in-progress {
  border: 2px solid #DF3449;
}

.in-progress >>> .card-text {
  color: #DF3449;
}

.completed {
  border: 2px solid green;
}

.completed  >>> .card-text {
  color: green;
}

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
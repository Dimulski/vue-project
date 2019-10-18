<template>
  <main-content title="Task">
    <template v-slot:body>
      <b-row v-for="row in getRows" :key="row">
        <list-item v-for="item in getItemsPerRowFromStore(row)" :key="item.id">
          <b-card 
            :class="[item.completed ? 'completed' : 'in-progress']"
            :title='item.title' align="left">
          <b-card-text>{{ item.completed ? 'Completed' : 'In Progress' }}</b-card-text>
        </b-card>
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
      tasks: state => state.tasks.tasks
    }),
    ...mapGetters({
      getRows: 'tasks/getRows',
      getItemsForRow: 'tasks/getItemsForRow'
    })
  },
  mounted () {
    this.$store.dispatch('tasks/loadSelectedTasks');
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
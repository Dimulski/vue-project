<template>
  <b-container class="main-content" xl="12">
    <content-header>To-Do's</content-header>
    <b-col sm="11" class="mb-4 mx-auto">
      <b-input-group>
      <b-form-input id="editBox" class="mr-3">
      </b-form-input>
      <b-button variant="outline-success" @click="createTodo">Create</b-button>
    </b-input-group>
    </b-col>
    <b-table
      id="todos-table"
      hover
      striped
      :items="todos"
      :fields="fields"
      
      :per-page="perPage"
      :current-page="currentPage">
      <template v-slot:cell(edit)="row">
        <b-button variant="outline-warning" size="sm" @click="row.toggleDetails">
        Edit
        </b-button>
      </template>
      <template v-slot:cell(delete)="row">
        <b-button variant="outline-danger" size="sm" @click="row.toggleDetails">
        Delete
        </b-button>
      </template>
      <template v-slot:cell(is_completed)="row">
        <b-form-checkbox size="lg" :class="[row.item.completed ? 'completed' : 'in-progress']" v-model="row.item.completed" switch></b-form-checkbox>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="todos-table"
    ></b-pagination>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
    todos: state => state.todos.todos,
    perPage: state => state.todos.perPage,
    rows: state => state.todos.rows,
    fields: state => state.todos.fields,
    }),
    currentPage: {
      get() { return this.$store.state.todos.currentPage },
      set(value) { this.setCurrentPage(value) }
    },
    completed: {
      get() { return this.$store.state.todos.completed },
      set(value) { this.setCompleted(value) }
    }
  },
  mounted () {
    this.loadTodos()
  },
  methods: {
    ...mapActions({
      loadTodos: 'todos/loadAllTodos',
      setCurrentPage: 'todos/setCurrentPage',
      setCompleted: 'todos/setCompleted'
    }),
    createTodo() {
      console.log('creating')
    }
  },
  components: {
    ContentHeader
  },
}
</script>

<style scoped>
#editBox {
  border-radius: 0.25rem;
}

.completed {
  background-color: green
}

.in-progress {

}

#switch {
  user-select: none;
}
</style>
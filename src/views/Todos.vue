<template>
  <b-container class="main-content" xl="12">
    <content-header>To-Do's</content-header>
    <b-col sm="11" class="mb-4 mx-auto">
      <b-form-group
      :invalid-feedback="invalidTitle"
      :state="titleState">
        <b-input-group>
          <b-form-input
            :state="titleState"
            id="editBox"
            v-model="editField"
            @input="updateTitle()"
            class="mr-3">
          </b-form-input>
          <b-button
            variant="outline-primary"
            @click="setTodo">
            {{ this.editFieldEditMode ? 'Save' : 'Create'}}
          </b-button>
        </b-input-group>
    </b-form-group>
    </b-col>
    <b-table
      id="todos-table"
      hover
      :items="todos"
      :fields="fields"
      :tbody-tr-class="rowClass"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-by='sortBy'
      :sort-desc="true">
      <template v-slot:cell(title)="row">
        <p :ref="`title-${row.item.id}`">{{row.item.title}}</p>
      </template>
      <template v-slot:cell(edit)="row">
        <b-button variant="outline-warning" size="sm" @click="editTodo(row.item)">
        Edit
        </b-button>
      </template>
      <template v-slot:cell(delete)="row">
        <b-button variant="outline-danger" size="sm" @click="promptDelete(row.item)"  v-b-modal.delete-modal>
        Delete
        </b-button>
      </template>
      <template v-slot:cell(is_completed)="row">
        <b-form-checkbox size="lg" v-model="row.item.completed" switch></b-form-checkbox>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="todos-table"
    ></b-pagination>

    <b-modal id="delete-modal">
      <template v-slot:modal-header="{ close }">
        <h5>Confirm Deletion</h5>
      </template>
      <template v-slot:default="{ hide }">
        <p>Are you sure you want to delete todo "{{todoBeingEdited.title}}"</p>
      </template>
      <template v-slot:modal-footer="{ hide }">      
        <b-button variant="danger" @click="confirmDelete">
          Delete
        </b-button>
        <b-button variant="outline-secondary" @click="hide('forget')">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import { isNullOrUndefined } from 'util'

export default {
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      perPage: state => state.todos.perPage,
      rows: state => state.todos.rows,
      fields: state => state.todos.fields,
      sortBy: state => state.todos.sortBy,
    }),
    currentPage: {
      get() { return this.$store.state.todos.currentPage },
      set(value) { this.setCurrentPage(value) }
    },
    editField: {
      get() { return this.$store.state.todos.editField },
      set(value) { this.setEditField(value) }
    },
    editFieldEditMode: {
      get() { return this.$store.state.todos.editFieldEditMode },
      set(value) { this.setEditFieldEditMode(value) }
    },
    todoBeingEdited: {
      get() { return this.$store.state.todos.todoBeingEdited },
      set(value) { this.setTodoBeingEdited(value) }
    },
    titleState() {
      if (this.editField == null) {
        return null
      }
      return this.editField.length >= 5 && this.editField.length <= 80
    },
    invalidTitle() {
      if (this.editField == null || (this.editField.length >= 5 && this.editField.length <= 80)) {
        return ''
      } else if (this.editField.length < 5 || this.editField.length > 80) {
        return 'Title must be between 5 and 80 characters.'
      } else {
        return 'Please enter a todo title.'
      }
    },
  },
  watch: {
    todos: function (newValues, oldValues) {
      console.log(`Todo ids with leading 0's: ${newValues.map(todo => String(todo.id).padStart(2, 0))}`)
    }
  },
  mounted () {
    this.loadTodos()
  },
  methods: {
    data() {
      return {
        initialFieldValue: ''
      }
    },
    ...mapActions({
      loadTodos: 'todos/loadAllTodos',
      setCurrentPage: 'todos/setCurrentPage',
      setCompleted: 'todos/setCompleted',
      setEditField: 'todos/setEditField',
      addTodo: 'todos/addTodo',
      setEditFieldEditMode: 'todos/setEditFieldEditMode',
      setTodoBeingEdited: 'todos/setTodoBeingEdited',
      saveTodo: 'todos/saveTodo',
      resetEdit: 'todos/resetEdit',
      deleteTodo: 'todos/deleteTodo'
    }),
    setTodo() {
      if (this.editFieldEditMode) {
        this.saveTodo(this.editField)
        this.resetEdit()
      } else if (this.editField != '' && !isNullOrUndefined(this.editField)) {
        this.addTodo(this.editField)
      } else {
        this.editField = ''
      }
    },
    editTodo(todo) {
      if (this.todoBeingEdited.id) {
        this.saveTodo(this.initialFieldValue)
        this.setEditField(todo.title)
        this.setEditFieldEditMode(true)
        this.setTodoBeingEdited(todo)
        this.initialFieldValue = todo.title
      } else {
        this.initialFieldValue = todo.title;
        this.setEditField(todo.title)
        this.setEditFieldEditMode(true)
        this.setTodoBeingEdited(todo)
      }
    },
    rowClass(item, type) {
      if (!item) return
      return item.completed ? 'completed' : 'in-progress'
    },
    promptDelete(todo) {
      this.setEditField(null)
      this.setEditFieldEditMode(false)
      this.setTodoBeingEdited(todo)
    },
    updateTitle() {
      if (this.todoBeingEdited.id) {
        this.saveTodo(this.editField)
      }
    },
    confirmDelete() {
      this.deleteTodo(this.todoBeingEdited)
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

div >>> .completed {
  color: green;
}

div >>> .completed:hover {
  color: #28a745 !important;
}

div >>> .in-progress {
  color: red;
}
div >>> .in-progress:hover {
  color: #dc3545 !important;
}

.form-control {
  width: 87%;
  display: flex;
}

#switch {
  user-select: none;
}
</style>
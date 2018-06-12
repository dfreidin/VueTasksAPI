<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>All the tasks:</h1>
        <TaskList v-on:edit-task="loadEdit" v-on:delete-task="deleteTask" v-on:show-task="showTask" v-bind:tasks="tasks" />
        <ShowTask v-bind:task="show_task" />
      </div>
      <div class="col">
        <h1>Add Task:</h1>
        <task-form v-on:handle-task="createTask" />
        <h1>Edit Task:</h1>
        <task-form v-on:handle-task="updateTask" v-bind:inputTask="edit_task"/>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import TaskList from "./components/TaskList.vue";
import ShowTask from "./components/ShowTask.vue";
import TaskForm from "./components/TaskForm.vue";

export default {
  name: 'app',
  components: {
    TaskList,
    ShowTask,
    TaskForm
  },
  data() {
      return {
          tasks: [],
          show_task: null,
          edit_task: null
      };
  },
  mounted() {
      this.getTasks();
  },
  methods: {
      getTasks() {
          console.log("getTasks()");
          axios.get("/tasks").then(response => {
              this.tasks = response.data.data;
          }).catch(error => {
              console.log("error:", error);
          });
      },
      showTask(task) {
        axios.get(`/tasks/${task._id}`).then(response => {
          this.show_task = response.data.data;
        }).catch(error => {
          console.log(error);
        });
      },
      createTask(task) {
        axios.post("/tasks", task).then(response => {
          this.getTasks();
        }).catch(error => {
          console.log(error);
        });
      },
      loadEdit(task) {
        this.edit_task = {
          title: task.title,
          description: task.description,
          _id: task._id
        }
      },
      deleteTask(task) {
        axios.delete(`/tasks/${task._id}`).then(response => {
          console.log("deleted, getting");
          this.getTasks();
        }).catch(error => {
          console.log(error);
        });
      },
      updateTask(task) {
        axios.patch(`/tasks/${task._id}`, task).then(response => {
          console.log("updated, getting");
          this.getTasks();
        }).catch(error => {
          console.log(error);
        });
      }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<template>
  <div id="app">
    <h1>All the tasks:</h1>
    <TaskList v-bind:tasks="tasks" />
  </div>
</template>

<script>
const axios = require("axios");
import TaskList from "./components/TaskList.vue"

export default {
  name: 'app',
  components: {
    TaskList
  },
  data() {
      return {
          tasks: []
      };
  },
  mounted() {
      this.getTasks();
  },
  methods: {
      getTasks() {
          axios.get("/tasks").then(response => {
              this.tasks = response.data.data;
              console.log("this.tasks:", this.tasks);
          }).catch(error => {
              console.log("error:", error);
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

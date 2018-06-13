<template>
    <ul>
        <li v-for="task in tasks" :key="task._id">
            {{task.title}}
            <button v-on:click="showTask(task)" class="btn btn-primary">Show</button>
            <button v-on:click="editTask(task)" class="btn btn-secondary">Edit</button>
            <button v-on:click="deleteTask(task)" class="btn btn-danger">Delete</button>
            <ul>
                <li>{{task.description}}</li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TaskList",
    props: {
        tasks: Array
    },
    methods: {
        showTask(task) {
            this.$emit("show-task", task);
        },
        editTask(task) {
            this.$emit("edit-task", task);
        },
        deleteTask(task) {
            this.$emit("delete-task", task);
        }
    }
}
</script>

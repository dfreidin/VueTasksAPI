<template>
    <ul>
        <li v-for="task in tasks">
            {{task.title}}
            <button v-on:click="showTask(task)" class="btn btn-primary">Show</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TaskList",
    props: [
        "tasks"
    ],
    methods: {
        showTask(task) {
            this.$emit("show-task", task);
        }
    }
}
</script>

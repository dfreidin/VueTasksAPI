<template>
    <ul>
        <li v-for="task in tasks">{{task.title}}</li>
    </ul>
</template>

<script>
export default {
    name: "TaskList",
    props: [
        "tasks"
    ]
}
</script>

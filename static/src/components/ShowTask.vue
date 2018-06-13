<template>
    <div v-if="task">
        <h3>{{task.title}}</h3>
        <h4>{{task.description}}</h4>
    </div>
</template>

<script>
export default {
    name: "ShowTask",
    props: {
        task: Object
    }
}
</script>

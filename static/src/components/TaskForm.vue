<template>
    <form>
        <p>Title: <input v-model="task.title" type="text"></p>
        <p>Description: <input v-model="task.description" type="text"></p>
        <p><button v-on:click="sendTask" class="btn btn-primary" type="button">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        inputTask: {
            default: {
                title: "",
                description: ""
            }
        }
    },
    data() {
        return {
            task: {}
        };
    },
    mounted() {
        this.loadTask();
    },
    methods: {
        loadTask() {
            Object.assign(this.task, this.inputTask);
        },
        sendTask() {
            this.$emit("handle-task", this.task);
        }
    }
}
</script>

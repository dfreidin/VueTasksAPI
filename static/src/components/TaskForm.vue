<template>
    <div>
        <p>Title: <input v-model="task.title" type="text"></p>
        <p>Description: <input v-model="task.description" type="text"></p>
        <p><button v-on:click="sendTask" class="btn btn-primary" type="button">Submit</button>
    </div>
</template>

<script>
export default {
    name: "TaskForm",
    
    props: {
        inputTask: {
            type: Object,
            default: {
                title: "",
                description: ""
            }
        }
    },
    
    data() {
        return {
            task: {
                title: "",
                description: ""
            }
        };
    },
    
    watch: {
        inputTask: "loadTask"
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

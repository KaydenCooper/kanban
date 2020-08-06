<template>
  <div class="tasks row" @dragstart="moveTask()">
    <div class="col-12">
      <div class="card m-1 shadow-lg p-2 border rounded">
        <button
          type="button"
          class="close text-right text-danger"
          aria-label="Close"
          @click="deleteTask(taskData.id)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h4>{{taskData.description}}</h4>
        <button
          type="button"
          class="btn btn-dark py-0"
          data-toggle="modal"
          :data-target="'#quickModal' + taskData.id"
        >Comments</button>
        <commentModal :taskProp="taskData" />
      </div>
    </div>
  </div>
</template>


<script>
import CommentModal from "./CommentModal";
export default {
  name: "tasks",
  props: ["taskData"],

  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", this.taskData);
    },
    moveTask() {
      this.$emit("dragstart");
    },
  },
  components: {
    CommentModal,
  },
};
</script>


<style scoped>
</style>
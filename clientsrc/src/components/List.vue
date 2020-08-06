<template>
  <div
    class="lists col-3 px-1 d-inline-block"
    dropzone="zone"
    @dragover.prevent
    @drop.prevent="moveTask()"
  >
    <div class="card border rounded p-2 m-2">
      <h3>{{listData.title}}</h3>
      <div class="input-group mb-3">
        <input
          v-model="newTask.description"
          type="text"
          class="form-control border primary shadow-lg"
          placeholder="Add Task...."
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary shadow-lg border rounded"
            type="button"
            @click="addTask(listData.id)"
          >Add</button>
        </div>
      </div>
      <tasks
        v-for="(task,index) in tasks"
        :taskData="task"
        :key="task.id"
        draggable="true"
        :listId="listData.id"
        @dragstart="reorderTask(task,index)"
      />
      <button
        class="btn btn-outline-danger m-1 shadow-lg py-1"
        type="button"
        @click="deleteList(listData.id)"
      >delete</button>
    </div>
  </div>
</template>


<script>
import Tasks from "../components/Tasks";
export default {
  name: "lists",
  props: ["listData"],
  data() {
    return {
      newTask: {},
    };
  },
  mounted() {
    this.$store.dispatch("getTasks", this.listData.id);
  },
  computed: {
    list() {
      return this.$store.state.lists;
    },
    tasks() {
      return this.$store.state.tasks[this.listData.id];
    },
    tempTask() {
      return this.$store.state.tempTask;
    },
  },
  methods: {
    addTask(id) {
      this.$store.dispatch("addTask", {
        description: this.newTask.description,
        listId: id,
      });
      this.newTask = {};
    },
    deleteList(id) {
      this.$store.dispatch("deleteList", this.listData);
    },
    moveTask() {
      let moveData = {
        newListId: this.listData.id,
        oldListId: this.tempTask.oldList.id,
        taskToMove: this.tempTask.task,
      };
      this.$store.dispatch("moveTask", moveData);
    },
    reorderTask(task, index) {
      this.$store.dispatch("setTaskToMove", {
        task: task,
        oldList: this.listData,
      });
    },
  },
  components: {
    Tasks,
  },
};
</script>


<style scoped>
</style>
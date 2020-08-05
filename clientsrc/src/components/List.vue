<template>
  <div class="lists col-3 px-1">
    <div class="card p-2 m-2">
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
      <tasks v-for="task in tasks" :taskData="task" :key="task.id" />
      <button
        class="btn btn-danger m-1 shadow-lg"
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
  },
  components: {
    Tasks,
  },
};
</script>


<style scoped>
</style>
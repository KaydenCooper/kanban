<template>
  <div
    class="lists col-3 px-1 d-inline-block"
    dropzone="zone"
    @dragover.prevent
    @drop.prevent="moveTask()"
  >
    <div class="card rounded bg-light p-2 m-2 mb-5" style="min-height: 15rem;">
      <h3>{{listData.title}}</h3>
      <form @submit.prevent="addTask(listData.id)">
        <div class="input-group mb-3">
          <input
            v-model="newTask.description"
            type="text"
            class="form-control border primary shadow-lg"
            placeholder="Add Task...."
          />
          <div class="input-group-append pb-4">
            <button
              class="btn bg-transparent text-light shadow-lg"
              type="button"
              @click="addTask(listData.id)"
            >Add</button>
          </div>
        </div>
      </form>
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
      >Delete List</button>
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
.bg-image {
  background-image: url("https://format-com-cld-res.cloudinary.com/image/private/s--7deqf97A--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/90f977a493f4f27c80949284ee718157/bw_crested_butte_mts_no_cropping.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  margin-left: -15px;
}
/* .bg-light {
  background-color: rgba(255, 255, 255, 0.596) !important;
  backdrop-filter: blur(5px);
} */
</style>
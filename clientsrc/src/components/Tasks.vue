<template>
  <div class="tasks row" @dragstart="moveTask()">
    <div class="col-12">
      <div class="card m-1 shadow-lg bg-light p-2 border rounded">
        <div>
          <button
            type="button"
            class="close text-right text-danger"
            aria-label="Close"
            @click="deleteTask(taskData.id)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h4>{{taskData.description}}</h4>
        <button
          type="button"
          class="btn bg-transparent text-light py-0"
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
.bg-image {
  background-image: url("https://format-com-cld-res.cloudinary.com/image/private/s--7deqf97A--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/90f977a493f4f27c80949284ee718157/bw_crested_butte_mts_no_cropping.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  margin-left: -15px;
}
.bg-transparent {
  background-color: #1a1a1a7a !important;
  backdrop-filter: blur(5px);
}
</style>
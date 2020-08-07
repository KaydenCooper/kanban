<template>
  <div class="comments col-12 text-dark">
    <button
      type="button"
      class="close float-left text-danger"
      aria-label="Close"
      @click="deleteComment"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <p>
      <img :src="user.picture" class="img-fluid border rounded" width="35vw" alt />
      -
      {{commentedData.description}}
    </p>
    <hr />
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentedData", "taskId"],
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", {
        id: this.commentedData,
        taskId: this.taskId,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
.bg-primary {
  background-color: #1a1a1a7a !important;
}
.shadow-lg {
  box-shadow: 0 2rem 3rem 1rem rgba(0, 0, 0, 0.175) !important;
}
.bg-transparent {
  background-color: #1a1a1a7a !important;
  backdrop-filter: blur(5px);
}

.cursor {
  cursor: pointer;
}
.close {
  font-size: 2.3125rem;
}
</style>
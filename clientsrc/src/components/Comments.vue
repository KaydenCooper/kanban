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
</style>
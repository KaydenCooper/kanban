<template>
  <div class="comment-modal row">
    <div class="modal" :id="'quickModal' + taskProp.id" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content bg-secondary text-light">
          <div class="modal-body">
            <div class="form-group">
              <form @submit.prevent="addComment()">
                <input
                  v-model="newComment.description"
                  type="text"
                  class="form-control text-wrap"
                  placeholder="Add Comment..."
                />
                <button
                  type="button"
                  class="btn text-light py-0 btn-block bg-transparent"
                  @click="addComment()"
                >Submit</button>
              </form>
              <h5 class="p-2">
                <u>Comments:</u>
              </h5>
              <Comments
                v-for="comment in taskProp.comments"
                :commentedData="comment"
                :taskId="taskProp.id"
                :key="comment.id"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger py-1" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Comments from "../components/Comments";
export default {
  name: "comment-modal",
  props: ["taskProp"],
  data() {
    return {
      newComment: {},
    };
  },
  computed: {},
  methods: {
    addComment() {
      this.$store.dispatch("addComment", {
        description: this.newComment.description,
        taskId: this.taskProp.id,
        listId: this.taskProp.listId,
      });
      this.newComment = {};
    },
  },
  components: {
    Comments,
  },
};
</script>


<style scoped>
.bg-transparent {
  background-color: #1a1a1a7a !important;
  backdrop-filter: blur(5px);
}
</style>
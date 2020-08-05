<template>
  <div class="comment-modal">
    <div class="modal" :id="'quickModal' + taskProp.id" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content bg-secondary text-light">
          <div class="modal-body">
            <div class="form-group">
              <input
                v-model="newComment.description"
                type="text"
                class="form-control text-wrap"
                placeholder="Add Comment..."
              />
              <button
                type="button"
                class="btn btn-success py-0 btn-block"
                @click="addComment()"
              >Submit</button>
              <h5 class="p-2">
                <u>Comments:</u>
              </h5>
              <Comments
                v-for="comment in taskProp.comments"
                :commentedData="comment"
                :key="comment.id"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger py-1" data-dismiss="modal">Close</button>
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
</style>
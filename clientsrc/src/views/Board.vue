<template>
  <div class="board flex-column flex-grow-1 bg-primary row justify-content-center p-2">
    <div class="col-12 bg-secondary p-2">
      <h1 v-if="board.title">
        <u>{{board.title}}</u>
      </h1>
      <h1>{{board.description}}</h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control border primary shadow-lg" placeholder="Add List..." />
        <div class="input-group-append">
          <button class="btn btn-primary shadow-lg border rounded" type="button">Add</button>
        </div>
      </div>
      <!-- <h1 v-else>Loading...</h1> -->
    </div>
    <div class="col-12 flex-grow-1">
      <div class="row bg-primary text-light"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
  },
  props: ["boardId"],
};
</script>

<style>
.shadow-lg {
  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.175) !important;
}
</style>

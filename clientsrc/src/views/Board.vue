<template>
  <div class="board flex-column flex-grow-1 bg-dark row justify-content-center bg-image">
    <div class="col-12 bg-secondary p-4">
      <h1 v-if="board.title">
        <u>{{board.title}}</u>
      </h1>
      <h1>{{board.description}}</h1>
      <form @submit.prevent="addlist(board.id)">
        <div class="input-group mb-3">
          <input
            v-model="newList.title"
            type="text"
            class="form-control border primary shadow-lg"
            placeholder="Add List..."
          />
          <div class="input-group-append">
            <button
              class="btn btn-dark shadow-lg border rounded"
              type="submit"
              @click="addList(board.id)"
            >Add</button>
          </div>
        </div>
      </form>
      <!-- <h1 v-else>Loading...</h1> -->
    </div>
    <div class="col-12 flex-grow-1">
      <div class="row text-primary p-1 overflow" style="height:65vh;">
        <lists v-for="list in lists" :listData="list" :key="list.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Lists from "../components/List";
export default {
  name: "board",
  data() {
    return {
      newList: {},
    };
  },
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("getList", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  props: ["boardId"],
  methods: {
    addList(id) {
      this.$store.dispatch("addList", {
        title: this.newList.title,
        boardId: id,
      });
      this.newList = {};
    },
  },
  components: {
    Lists,
  },
};
</script>

<style>
.shadow-lg {
  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.175) !important;
}
.overflow {
  overflow-x: auto;
  flex-wrap: nowrap;
}
</style>

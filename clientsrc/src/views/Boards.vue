<template>
  <div class="boards container-fluid">
    <div class="row justify-content-center p-3">
      <form @submit.prevent="addBoard">
        <div class="input-group">
          <input type="text" placeholder="title" v-model="newBoard.title" required />
          <input type="text" placeholder="description" v-model="newBoard.description" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit">Create Board</button>
          </div>
        </div>
      </form>
    </div>
    <div v-for="board in boards" :key="board.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">
        <h1>
          <u>{{board.title}}</u>
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
  },
};
</script>
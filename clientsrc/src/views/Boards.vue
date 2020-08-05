<template>
  <div class="boards row justify-content-center p-3">
    <form @submit.prevent="addBoard">
      <div class="input-group">
        <input type="text" placeholder="title" v-model="newBoard.title" required />
        <input type="text" placeholder="description" v-model="newBoard.description" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Create Board</button>
        </div>
      </div>
    </form>
    <div class="col-12">
      <div class="row p-2">
        <div v-for="board in boards" :key="board.id">
          <h1>
            <div
              class="card text-white bg-dark border rounded shadow-lg mb-3 mx-2 p-2"
              style="max-width: 20rem;"
            >
              <button
                type="button"
                class="close text-right text-danger cursor"
                @click="deleteBoard(board.id)"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <router-link :to="{name: 'board', params: {boardId: board.id}}">
                <div class="card-header text-light">{{board.title}}</div>
                <div class="card-body">
                  <p class="card-text text-light">{{board.description}}</p>
                </div>
              </router-link>
            </div>
          </h1>
        </div>
      </div>
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
    deleteBoard(id) {
      this.$store.dispatch("deleteBoard", id);
    },
  },
};
</script>

<style>
.cursor {
  cursor: pointer;
}
.close {
  font-size: 2.3125rem;
}
</style>
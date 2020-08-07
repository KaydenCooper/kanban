<template>
  <div class="boards container-fluid flex-column flex-grow-1 justify-content-center p-3 bg-image">
    <div class="text-center pb-2">
      <form @submit.prevent="addBoard">
        <div class="input-group bg-transparent shadow-lg p-3">
          <div class="input-group-prepend ml-5">
            <button class="btn bg-transparent secondary text-light" type="submit">Create Board</button>
          </div>
          <input
            class="p-2 w-75"
            type="text"
            placeholder="Enter Title..."
            v-model="newBoard.title"
            required
          />
        </div>
      </form>
    </div>
    <div class="col-12 pt-2">
      <div class="row p-2 justify-content-center">
        <div v-for="board in boards" :key="board.id">
          <div class="card bg-transparent shadow-lg mb-3 mx-2 p-1" style="min-width: 15rem;">
            <div class="card text-primary m-1 px-4 pt-4 pb-1" style="min-height: 10rem;">
              <router-link :to="{name: 'board', params: {boardId: board.id}}">
                <div class="card-body py-0">
                  <div class="text-primary">
                    <h1 class="pb-4">
                      <u>{{board.title}}</u>
                    </h1>
                  </div>
                </div>
              </router-link>
              <button
                type="button"
                class="cursor btn btn-outline-danger py-0"
                @click="deleteBoard(board.id)"
                aria-label="Close"
              >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-dark text-light fixed-bottom p-3">Created By: Harrison Wheeler & Kayden Cooper</footer>
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
.bg-image {
  background-image: url("https://format-com-cld-res.cloudinary.com/image/private/s--7deqf97A--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/90f977a493f4f27c80949284ee718157/bw_crested_butte_mts_no_cropping.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  margin-left: -15px;
}

.cursor {
  cursor: pointer;
}
.close {
  font-size: 2.3125rem;
}
.bg-transparent {
  background-color: #1a1a1a7a !important;
  backdrop-filter: blur(5px);
}
</style>
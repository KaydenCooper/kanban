<template>
  <div class="lists col-3">
    <div class="card p-2 m-2">
      <h3>{{listData.title}}</h3>
      <button class="btn btn-danger" type="button" @click="deleteList(list.id)">delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "lists",
  props: ["listData"],
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.lists;
    },
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", { listId: id });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>
<template>
  <div class="tasks row">
    <div class="col-12">
      <div class="card m-1 shadow-lg p-2 border rounded">
        <h4>{{taskData.description}}</h4>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "tasks",
  props: ["taskData"],

  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>
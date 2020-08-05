<template>
  <div class="comments text-dark">
    <p>{{commentedData.description}}</p>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentedData"],
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
<template>
  <div class="home container-fluid flex-column flex-grow-1 justify-content-center bg-image">
    <div class="row justify-content-center">
      <div class="col-6 card bg-dark shadow-lg m-2 p-2">
        <h1 class="text-light">Welcome to Harry & Kayden's KanBan Boards</h1>
        <hr />
        <h4 class="text-light">PLEASE LOG IN TO CREATE YOUR VERY OWN TRELLO BOARD</h4>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.bg-image {
  background-image: url("https://format-com-cld-res.cloudinary.com/image/private/s--7deqf97A--/c_limit,g_center,h_65535,w_2500/fl_keep_iptc.progressive,q_95/v1/90f977a493f4f27c80949284ee718157/bw_crested_butte_mts_no_cropping.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  margin-left: -15px;
}
</style>
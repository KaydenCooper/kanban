<template>
  <div class="home d-flex container-fluid flex-column flex-grow-1 justify-content-center bg-image">
    <div class="row mb-5 align-items-center justify-content-center">
      <div class="col-11 col-md-6 thicc-border m-2 p-2">
        <h1 class="text-light pt-3">Kanban</h1>
        <hr />
        <h4 class="text-light">PLEASE LOG IN TO CREATE YOUR VERY OWN TRELLO BOARD</h4>
      </div>
    </div>
    <footer class="bg-dark text-light fixed-bottom p-1">
      <small>Created By: Harrison Wheeler & Kayden Cooper</small>
    </footer>
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
.bg-primary {
  background-color: #1a1a1a7a !important;
}
.shadow-lg {
  box-shadow: 0 2rem 3rem 1rem rgba(0, 0, 0, 0.175) !important;
}
.bg-transparent {
  background-color: #1a1a1a7a !important;
  backdrop-filter: blur(5px);
}
.thicc-border {
  border: white solid 3px;
}
</style>
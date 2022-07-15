<template>
  <div class="main-wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.onResize();
    });
  },
  methods: {
    onResize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      document.documentElement.style.setProperty("--vw", `${vw}px`);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
};
</script>

<style>
</style>
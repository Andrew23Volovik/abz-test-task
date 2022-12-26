<template>
  <div class="loader" v-if="show"></div>
</template>

<script>
export default {
  name: 'ThePreloaderComponent',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 50%;
  left: calc(50% - 24px);
  width: 48px;
  height: 48px;
  background: url('@/assets/picture/Preloader.svg');
  animation: spin 1s linear infinite;
  z-index: 100;
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
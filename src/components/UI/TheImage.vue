<template>
  <img :src="image" alt="img-user" class="image" ref="image" />
</template>

<script>
export default {
  name: 'TheImageComponent',
  props: {
    image: {
      type: String,
      default: () => require('@/assets/picture/photo-cover.svg'),
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
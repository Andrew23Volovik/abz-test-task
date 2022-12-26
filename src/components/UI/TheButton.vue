<template>
  <button
    class="button"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="$emit('click', $event)"
    :style="{ width: width }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TheButtonComponent',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 4px 0;
  color: #000;
  font-size: 16px;
  line-height: 26px;
  border-radius: 80px;
  background-color: $primary-color;
  border: none;
  transition: 0.3s all ease;
  cursor: pointer;
  &:hover {
    background-color: #ffe302;
  }
}
.button.disabled {
  background-color: #b4b4b4;
  color: #fff;
}
</style>
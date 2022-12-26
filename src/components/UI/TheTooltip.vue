<template>
  <div class="tooltip-container">
    <slot />
    <div class="tooltip">
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTooltipComponent',
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.tooltip-container {
  display: inline-block;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}

.tooltip {
  width: max-content;
  text-align: center;
  padding: 0 16px;
  border-radius: 4px;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 1s ease;
  position: absolute;
  z-index: 1;
  background: $black87-color;
}
.text {
  font-size: 16px;
  line-height: 26px;
  color: #fff;
}
</style>
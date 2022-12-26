<template>
  <div class="checkbox__wrapper">
    <span>
      <slot></slot>
    </span>
    <div class="checkbox" v-for="(pos, idx) in getUserPositions" :key="idx">
      <input
        type="radio"
        :id="pos.id"
        class="checkbox-input"
        name="position"
        :checked="pos.checked"
        @click="changePos(pos.id)"
      />
      <label :for="pos.id" class="checkbox-label">
        {{ pos.name }}
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheCheckboxComponent',
  computed: {
    ...mapGetters(['getUserPositions']),
  },
  methods: {
    changePos(pos) {
      if (!pos) {
        this.$emit('position', 1);
      } else {
        this.$emit('position', pos);
      }
    },
  },
  mounted() {
    this.changePos();
  },
};
</script>

<style lang="scss" scoped>
.checkbox__wrapper {
  display: flex;
  flex-direction: column;
  gap: 7px;
  span {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: $black87-color;
  }
  .checkbox {
    position: relative;
    &-input {
      position: absolute;
      appearance: none;
      &:checked + .checkbox-label:before {
        border-color: $secondary-color;
      }
      &:checked + .checkbox-label:after {
        opacity: 1;
      }
    }
    &-label {
      margin-left: 32px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      color: #000;
      &:before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border: 1px solid $border-color;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 0;
        z-index: 1;
        transition: all 0.2s linear;
      }
      &:after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: $secondary-color;
        border-radius: 50%;
        position: absolute;
        top: 7px;
        left: 5px;
        opacity: 0;
        transition: all 0.2s linear;
      }
    }
  }
}
</style>
<template>
  <div class="input-container">
    <input
      :type="type"
      id="input"
      ref="input"
      :class="{ 'is-error': errorMsg }"
      :value="value"
      @focus="addFocusClass"
      @input="$emit('input', $event.target.value)"
    />
    <label
      class="label"
      for="input"
      :class="{ 'is-focus': isFocus, 'is-error': errorMsg }"
    >
      {{ label }}
    </label>
    <span class="hint-text" :class="{ 'is-error': errorMsg }" v-if="errorMsg">
      {{ errorMsg }}
    </span>
    <span class="hint-text" v-if="errorCheck">
      {{ hintMsg }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheInputComponent',
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
    errorMsg: {
      type: String,
      default: '',
      required: false,
    },
    hintMsg: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: '',
      required: true,
    },
    model: {
      prop: 'value',
      event: 'input',
    },
    value: String,
  },
  data() {
    return {
      isFocus: false,
    };
  },
  computed: {
    errorCheck() {
      if (this.errorMsg.length > 0) {
        return false;
      } else if (this.hintMsg.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addFocusClass() {
      this.isFocus = true;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        if (this.$refs.input.value === '') {
          this.isFocus = false;
        } else {
          this.isFocus = true;
        }
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.close);
    if (this.isError) {
      this.isFocus = true;
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    height: 54px;
    background-color: transparent;
    border: 1px solid $border-color;
    border-radius: 4px;
    font-size: 16px;
    line-height: 16px;
    padding: 14px 16px;
    &:focus {
      outline: none;
      border: 2px solid $border-color;
    }
  }

  .label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    color: $label-color;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 16px;
    line-height: 16px;
    cursor: text;
    transition: all 0.15s ease-out;
    pointer-events: none;
  }

  .hint-text {
    position: absolute;
    bottom: -18px;
    left: 16px;
    font-size: 12px;
    line-height: 14px;
    color: $label-color;
  }

  .label.is-focus {
    height: 16px;
    font-size: 12px;
    line-height: 14px;
    transform: translate(0, -50%);
    background-color: $background-color;
    padding-left: 4px;
    padding-right: 4px;
  }

  input.is-error {
    border: 1px solid $error-color;
  }

  .label.is-error {
    color: $error-color;
  }

  .hint-text.is-error {
    color: $error-color;
  }
}
</style>
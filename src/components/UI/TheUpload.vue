<template>
  <div class="upload-container">
    <div class="upload-container__main">
      <label
        for="upload"
        class="upload-label"
        :class="{ 'is-error': errorMsg }"
      >
        Upload
        <input
          type="file"
          id="upload"
          class="upload"
          ref="upload"
          @change="$emit('change', $event)"
        />
      </label>
      <span
        class="upload-text"
        :class="{ active: file, 'is-error': errorMsg }"
        @click="$refs.upload.click()"
      >
        {{ placeholder }}
      </span>
    </div>
    <div class="upload-container__hint">
      <span class="hint-text" :class="{ 'is-error': errorMsg }">
        {{ errorMsg }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheUploadComponent',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    errorMsg: {
      type: String,
      default: '',
    },
    file: {
      type: File,
      default: File,
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-container {
  position: relative;
  width: 100%;
  &__main {
    display: flex;
    align-items: center;
    .upload {
      display: none;
      &::file-selector-button {
        visibility: hidden;
      }
      &-label {
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        padding: 14px 15px 14px 14px;
        border: 1px solid #000;
        border-radius: 4px 0 0 4px;
      }
      &-label.is-error {
        border: 2px solid $error-color;
      }
      &-text {
        width: 100%;
        padding: 14px 16px;
        font-size: 16px;
        line-height: 24px;
        color: $label-color;
        border: 1px solid $border-color;
        border-radius: 0 4px 4px 0;
        border-left: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
      }
      &-text.active {
        color: #000;
      }
      &-text.is-error {
        border-width: 2px;
        border-left: none;
        border-color: $error-color;
      }
    }
  }
  &__hint {
    position: absolute;
    bottom: -18px;
    left: 16px;
    font-size: 12px;
    line-height: 14px;
  }
  .hint-text {
    color: $label-color;
  }
  .hint-text.is-error {
    color: $error-color;
  }
}
</style>
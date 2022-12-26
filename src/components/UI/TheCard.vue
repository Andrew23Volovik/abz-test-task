<template>
  <div class="card">
    <TheImage :image="photo"></TheImage>
    <TheTooltip :text="name">
      <span class="card__name">{{ name }}</span>
    </TheTooltip>
    <div class="card__descr">
      <span>{{ position }}</span>
      <br />
      <TheTooltip :text="email">
        <span>{{ email }}</span>
      </TheTooltip>
      <br />
      <span>{{ phone }}</span>
      <br />
    </div>
  </div>
</template>

<script>
import TheImage from '@/components/UI/TheImage.vue';
import TheTooltip from './TheTooltip.vue';

export default {
  name: 'TheCardComponent',
  props: {
    photo: {
      type: String,
      default: '',
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    position: {
      type: String,
      default: '',
      required: true,
    },
    email: {
      type: String,
      default: '',
      required: true,
    },
    phone: {
      type: String,
      default: '',
      required: true,
    },
  },
  components: {
    TheImage,
    TheTooltip,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  &__name {
    width: 242px;
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__descr {
    width: 242px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    span {
      font-size: 16px;
      line-height: 26px;
      color: #000;
    }
  }
}
</style>
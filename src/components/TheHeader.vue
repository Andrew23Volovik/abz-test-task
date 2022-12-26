<template>
  <header class="header">
    <div class="header__wrapper container">
      <img src="@/assets/picture/Logo.svg" alt="logo" />
      <div class="header__buttons">
        <TheButton>Users</TheButton>
        <TheButton>Sign up</TheButton>
      </div>
    </div>
  </header>
</template>

<script>
import TheButton from './UI/TheButton.vue';
export default {
  components: { TheButton },
  name: 'TheHeaderComponent',
};
</script>

<style lang="scss" scoped>
@media (min-width: 360px) {
  .header {
    width: 100%;
    background-color: #fff;
    &__wrapper {
      position: relative;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }
    &__buttons {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
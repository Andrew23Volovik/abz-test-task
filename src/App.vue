<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $background-color;
}

.main {
  flex: 1 0 auto;
  background-color: $background-color;
}

.footer {
  flex-shrink: 0;
  background-color: $background-color;
}

@media (min-width: 360px) {
  .container {
    max-width: 328px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 704px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 904px;
  }
}

@media (min-width: 2560px) {
  .container {
    max-width: 1170px;
  }
}
</style>

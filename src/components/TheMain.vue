<template>
  <main class="main">
    <ThePreloader :show="getLoading"></ThePreloader>
    <section class="descr">
      <div class="descr__background">
        <div class="descr__main">
          <h1 class="descr__main__title container">
            Test assignment for front-end developer
          </h1>
          <p class="descr__main__text container">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <TheButton>Sign up</TheButton>
        </div>
      </div>
    </section>
    <section class="get container">
      <h2>Working with GET request</h2>
      <TheCard
        v-for="(user, idx) in getUsers"
        :key="idx"
        :photo="user.photo"
        :name="user.name"
        :position="user.position"
        :email="user.email"
        :phone="user.phone"
      ></TheCard>
      <TheButton class="get__button" :width="'120px'" @click="loadMoreCard"
        >Show more</TheButton
      >
    </section>
    <section class="post">
      <h2>{{ showCurrentText }}</h2>
      <TheForm v-if="!getSuccessImg"></TheForm>
      <img src="@/assets/picture/success-image.svg" alt="success" v-else />
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TheCard from '@/components/UI/TheCard.vue';
import TheButton from '@/components/UI/TheButton.vue';
import ThePreloader from '@/components/UI/ThePreloader.vue';

import TheForm from '@/components/TheForm.vue';

export default {
  name: 'TheMainComponent',
  components: {
    TheCard,
    TheButton,
    TheForm,
    ThePreloader,
  },
  data() {
    return {
      page: 1,
      text: '',
    };
  },
  computed: {
    ...mapGetters(['getUsers', 'getLoading', 'getSuccessImg']),
    showCurrentText() {
      if (this.getSuccessImg) {
        return 'User successfully registered';
      } else {
        return 'Working with POST request';
      }
    },
  },
  methods: {
    ...mapActions(['requestGetUsers', 'requestGetToken']),
    loadMoreCard() {
      const nextPage = ++this.page;
      this.page = nextPage;
      this.requestGetUsers(nextPage);
    },
  },
  async created() {
    const res = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100`
    );
    const data = await res.json();
    console.log(data);
  },
  mounted() {
    this.requestGetToken();
    this.requestGetUsers(this.page);
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 360px) {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 140px;
    .descr {
      width: 100%;
      &__background {
        display: flex;
        justify-content: center;
        height: 500px;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url('@/assets/picture/background.jpeg');
        background-repeat: no-repeat;
        background-size: 320% 160%;
        background-position: center bottom;
      }
      &__main {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__title {
          padding-top: 40px;
          text-align: center;
          font-size: 40px;
          line-height: 40px;
          font-weight: 400;
          color: #fff;
        }
        &__text {
          text-align: center;
          margin-top: 21px;
          margin-bottom: 32px;
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;
          color: #fff;
        }
      }
    }

    .get {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      h2 {
        width: 328px;
        text-align: center;
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        color: $black87-color;
      }
      &__button {
        margin-top: 30px;
      }
    }
    .post {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        width: 328px;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        color: $black87-color;
      }
    }
  }
}

@media (min-width: 768px) {
  .main {
    .descr {
      &__background {
        background-size: 300% 160%;
      }
      &__main {
        width: 380px;
        &__title {
          padding-top: 89px;
        }
      }
    }
    .get {
      display: grid;
      grid-template-columns: repeat(2, 344px);
      justify-items: center;
      gap: 16px;
      h2 {
        grid-column: 1/3;
        width: inherit;
        margin-bottom: 34px;
      }
      &__button {
        grid-column: 1/3;
        margin-top: 34px;
      }
    }
    .post {
      h2 {
        width: inherit;
      }
    }
  }
}

@media (min-width: 1024px) {
  .main {
    .descr {
      &__background {
        height: 650px;
        background-size: 300% 160%;
      }
      &__main {
        &__title {
          padding-top: 164px;
        }
      }
    }
    .get {
      grid-template-columns: repeat(3, 282px);
      gap: 29px;
      h2 {
        grid-column: 1/4;
        margin-bottom: 21px;
      }
      &__button {
        grid-column: 1/4;
        margin-top: 21px;
      }
    }
    .post {
      h2 {
        width: inherit;
      }
    }
  }
}

@media (min-width: 2560px) {
  .main {
    .descr {
      &__background {
        margin: 0 695px;
        height: 650px;
        background-size: 210% 160%;
      }
      &__main {
        &__title {
          padding-top: 164px;
        }
      }
    }
    .get {
      grid-template-columns: repeat(3, 370px);
    }
  }
}
</style>
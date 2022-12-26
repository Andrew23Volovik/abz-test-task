<template>
  <form class="form container">
    <div class="form__inputs">
      <TheInput
        :label="'Your name'"
        :type="'text'"
        v-model="userName"
        @input="checkNameUser"
        :errorMsg="userNameError"
      ></TheInput>
      <TheInput
        :label="'Email'"
        :type="'email'"
        v-model="email"
        @input="checkEmail"
        :errorMsg="emailError"
      ></TheInput>
      <TheInput
        :label="'Phone'"
        :type="'tel'"
        :hintMsg="'+38 (XXX) XXX - XX - XX'"
        v-model="phone"
        @input="checkPhone"
        :errorMsg="phoneError"
      ></TheInput>
    </div>
    <TheCheckbox class="form__checkbox" @position="setPosition">
      Select your position
    </TheCheckbox>
    <TheUpload
      class="form__upload"
      @change="fileCheck"
      :placeholder="filePlaceholder"
      :errorMsg="fileError"
      :file="file"
    ></TheUpload>
    <TheButton @click.prevent="formValidate" :disabled="buttonActive">
      Sign Up
    </TheButton>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

import TheInput from '@/components/UI/TheInput.vue';
import TheCheckbox from '@/components/UI/TheCheckbox.vue';
import TheUpload from '@/components/UI/TheUpload.vue';
import TheButton from '@/components/UI/TheButton.vue';

export default {
  name: 'TheFormComponent',
  components: {
    TheInput,
    TheCheckbox,
    TheUpload,
    TheButton,
  },
  data() {
    return {
      userName: '',
      userNameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      position: '',
      filePlaceholder: 'Upload your photo',
      file: null,
      fileError: '',
    };
  },
  computed: {
    buttonActive() {
      if (
        this.userName !== '' &&
        this.email !== '' &&
        this.phone !== '' &&
        this.file !== null
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(['requestUserPositions', 'requestPostUser']),
    setPosition(pos) {
      this.position = pos;
    },
    formValidate() {
      this.checkNameUser();
      this.checkEmail();
      this.checkPhone();
      this.fileCheck();

      if (
        this.userNameError !== '' &&
        this.emailError !== '' &&
        this.phoneError !== '' &&
        this.fileError !== ''
      ) {
        false;
      } else {
        const formData = new FormData();
        formData.append('position_id', this.position);
        formData.append('name', this.userName);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('photo', this.file);

        this.requestPostUser(formData);
      }
    },
    checkNameUser() {
      const reg = /^[A-Z][a-z]+\s[A-Z][a-z]+$/gm;
      if (!reg.test(this.userName)) {
        return (this.userNameError =
          'Your name should be like in the example: Max Smith!');
      } else {
        return (this.userNameError = '');
      }
    },
    checkEmail() {
      const reg = /^\S+@\S+\.\S+$/;
      if (!reg.test(this.email)) {
        return (this.emailError = 'You have entered an invalid email address!');
      } else {
        return (this.emailError = '');
      }
    },
    checkPhone() {
      const reg = /^\+?3?8?(0\d{9})$/;
      if (!reg.test(this.phone)) {
        return (this.phoneError = 'You have entered an invalid phone number!');
      } else {
        return (this.phoneError = '');
      }
    },
    fileCheck(event) {
      try {
        if (this.file !== null) {
          return false;
        }

        if (!event.target.files[0].name.match(/\.(jpg|jpeg)$/i)) {
          return (this.fileError = 'File extension must be .jpg, .jpeg');
        }

        const fileSize = event.target.files[0].size / 1024 / 1024;
        if (fileSize > 5) {
          return (this.fileError = "File size can't be > 5MiB");
        } else {
          this.fileError = '';
        }
        this.file = event.target.files[0];
        this.filePlaceholder = event.target.files[0].name;
      } catch (error) {
        this.fileError = 'Please select a file';
      }
    },
  },
  mounted() {
    this.requestUserPositions();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 360px) {
  .form {
    width: 328px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
    &__checkbox {
      margin-top: 43px;
      align-self: flex-start;
    }
    &__upload {
      margin-top: 46px;
      margin-bottom: 50px;
    }
  }
}

@media (min-width: 768px) {
  .form {
    width: 380px;
  }
}
</style>
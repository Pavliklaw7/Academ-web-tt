<template>
  <div class="main-wrapper__login">
    <form @submit.prevent="submit" class="login">
      <div v-if="errorMessage" class="login__err">
        {{ errorMessage }}
      </div>
      <input
        class="login__input"
        v-model="email"
        type="email"
        placeholder="email"
      />
      <input
        class="login__input"
        v-model="password"
        type="password"
        placeholder="password"
      />
      <button class="login__btn" type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async submit() {
      console.log(this.email, this.password);

      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            login: this.email,
            password: this.password,
          },
        });
        this.$auth.$storage.setState("loggedIn", true);
        this.$auth.$storage.setLocalStorage("user", response.data.data);
        this.$router.push("/courses");
      } catch (err) {
        const error = err.response.data.message;
        this.errorMessage = error.slice(0, Number(error.indexOf(".")) + 1);
      }
    },
  },
};
</script>

<style lang="scss">
.main-wrapper__login {
  position: relative;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: grid;
  grid-gap: 0.5rem;

  &__err {
    color: red;
  }
}
</style>

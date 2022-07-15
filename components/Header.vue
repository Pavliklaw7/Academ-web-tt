<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink class="header__link" to="/">HOME</NuxtLink>
        <p v-if="user">
          {{ `${user.first_name} ${user.last_name}` }}
        </p>
        <NuxtLink v-if="!isAuthenticated" class="header__link" to="/login"
          >LOGIN</NuxtLink
        >
        <button v-else class="header__btn" @click="$auth.logout()">
          LOGOUT
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.setUser();
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      loggedInUser: "loggedInUser",
    }),
  },
  methods: {
    setUser() {
      this.user = this.$auth.$storage.getLocalStorage("user");
    },
  },
};
</script>

<style>
</style>
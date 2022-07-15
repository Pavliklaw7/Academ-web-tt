<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink class="header__link" to="/">HOME</NuxtLink>

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
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      loggedInUser: "loggedInUser",
    }),
  },
};
</script>

<style>
</style>
<template>
  <main class="main">
    <p v-if="!isAuthenticated" class="main__text">
      Please, login, so we can show you our courses!
    </p>
    <div v-else>
      <p class="main__text col">
        You have loged in, please, have fun with our courses
        <Nuxt-Link to="/courses"> Go to Courses </Nuxt-Link>
      </p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      loggedInUser: "loggedInUser",
    }),
  },
};
</script>

<style lang="scss">
.main {
  &__text {
    margin: 1rem 0;
    text-align: center;
  }
}
.col {
  display: flex;
  flex-direction: column;

  & > p {
    margin-bottom: 1rem;
  }

  & > a {
    color: #000;
  }
}
</style>

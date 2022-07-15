<template>
  <div class="course-page">
    <div class="container">
      <div class="course-page__inner">
        <Nuxt-Link to="/courses" class="course-page__close">
          <img src="@/assets/left.svg" alt="go back" />
        </Nuxt-Link>
        <h3 class="course-page__title">
          {{ course.name }}
        </h3>
        <img
          :src="getImg(course.thumbnail_url)"
          alt="course preview"
          class="course-page__img"
        />

        <p class="course-page__text" v-html="course.description"></p>
        <p class="course-page__text">price: {{ course.price }}</p>
        <p class="course-page__text">difficulty: {{ course.difficulty }}/10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {},
    };
  },
  mounted() {
    this.fetchCourse(this.$route.query.id);
  },
  methods: {
    async fetchCourse(id) {
      const response = await this.$axios.$get(
        `https://service.lms.academweb.tech/api/courses/${id}`
      );
      this.course = response.data;
    },
    getImg(url) {
      if (url === undefined || url.includes("sample")) {
        return "/img/placeholder.jpeg";
      } else {
        return url;
      }
    },
  },
};
</script>

<style lang="scss">
.course-page {
  &__inner {
    padding-block: 1rem;
  }

  &__close {
    display: block;
    margin-bottom: 1rem;

    & > img {
      width: 15px;
    }
  }

  &__title,
  &__img,
  &__text:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__img {
    width: min(100%, 300px);
  }
}
</style>
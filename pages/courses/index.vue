<template>
  <div class="courses">
    <div class="container">
      <div v-if="items.length" class="courses__inner">
        <nuxt-link
          class="courses__item course"
          :to="{
            path: `/courses/${item.name.toLowerCase().replace(/ /g, '_')}`,
            query: { id: item.id },
          }"
          v-for="item in collection"
          :key="item.id"
        >
          <img
            :src="getImg(item.thumbnail_url)"
            alt="course preview"
            class="course__img"
          />
          <div class="course__inner">
            <h3 class="course__title">{{ item.name }}</h3>
            <p class="course__text">Price: {{ item.price }}</p>
            <p class="course__text">Difficulty: {{ item.difficulty }}</p>
            <p class="course__text">Students: {{ item.students_count }}</p>
          </div>
        </nuxt-link>
      </div>
      <UiLoader v-else />
      <div class="pagination">
        <button
          v-for="page of pagination.pages"
          :key="page"
          class="pagination__btn"
          @click.prevent="setPage(page)"
          :class="{ active: page === pagination.currentPage }"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      pagination: {},
    };
  },
  mounted() {
    this.fetchCampaigns();
    console.log(this.$auth);
  },
  computed: {
    itemsPerPage() {
      if (window.innerWidth <= 768) {
        return 2;
      } else {
        return 3;
      }
    },
    collection() {
      return this.paginate(this.items)[this.pagination.currentPage - 1];
    },
  },
  methods: {
    getImg(url) {
      if (url === null || url.includes("sample")) {
        return "img/placeholder.jpeg";
      } else {
        return url;
      }
    },
    async fetchCampaigns() {
      const response = await this.$axios.$get(
        `https://service.lms.academweb.tech/api/courses`
      );
      this.items = response.data;
      this.setPage(1);
    },
    setPage(p) {
      this.pagination = this.paginator(this.items.length, p);
      console.log(this.pagination);
    },
    paginate(data) {
      return this.sliceIntoChunks(data, this.itemsPerPage);
    },
    paginator(totalItem, currentPage) {
      let startIndex = (currentPage - 1) * this.itemsPerPage;
      let endIndex = Math.min(
        startIndex + this.itemsPerPage - 1,
        totalItem - 1
      );

      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: Array.from(
          { length: this.items.length / this.itemsPerPage },
          (_, i) => i + 1
        ),
      };
    },
    sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
      }
      return res;
    },
  },
};
</script>

<style lang="scss">
.courses {
  padding-block: 2rem;
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    min-height: 600px;
  }
}

.course {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border: 1px solid rgb(50, 49, 49);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &__inner {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  &__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  &__btn {
    cursor: pointer;

    &.active {
      background-color: #00a390;
    }
  }

  &__btn:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>
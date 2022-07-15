<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="container">
        <p>Get connected with me on social networks!</p>
        <div class="social">
          <a
            v-for="(social, i) in socials"
            :key="i"
            :href="social.url"
            class="social__item"
          >
            <img
              :src="getImg(social.icon)"
              :alt="social.icon"
              class="social__item"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p>{{ new Date().getFullYear() }} - VLADYSLAV PAVLIK</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "github",
          url: "https://github.com/Pavliklaw7",
        },
        {
          icon: "facebook",
          url: "https://www.facebook.com/profile.php?id=100004369868314",
        },
        {
          icon: "linkedin",
          url: "https://www.linkedin.com/in/vlad-pavlik-6005b1164/",
        },
        {
          icon: "instagram",
          url: "https://www.instagram.com/?hl=ru",
        },
      ],
    };
  },
  methods: {
    getImg(icon) {
      return `../static/img/${icon}.svg`;
    },
  },
};
</script>

<style lang="scss">
.footer {
  background-color: #00695c;
  color: #fff;

  &__inner {
    height: 3rem;

    @media screen and (max-width: 700px) {
      height: 4.5rem;
    }

    @media screen and (max-width: 480px) {
      height: 5.5rem;
    }
  }
  &__bottom {
    height: 1.5rem;
    background-color: #000;
  }

  &__inner {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      @media screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: space-around;
      }

      & > p {
        @media screen and (max-width: 480px) {
          text-align: center;
        }
      }
    }
  }

  &__bottom {
    .container {
      text-align: center;
    }
  }
}

.social {
  display: flex;

  &__item {
    width: 30px;
  }

  &__item:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>

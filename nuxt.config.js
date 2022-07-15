export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'academ-web-tt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.scss',
    '~assets/css/reset.css',
  ],
  target: 'static',
  router: {
    base: '/Academ-web-tt/',

    middleware: [ 'auth' ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  vite: {
    optimizeDeps: {
      include: [
        'cookie'
      ]
    }
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  axios: {
    baseURL: 'https://service.lms.academweb.tech/api'
  },
  auth: {
    plugins: [ '@plugins/axios.js' ],
    fullPathRedirect: false,
    rewriteRedirects: false,
    redirect: {
      logout: '/',
      login: '/',
      home: false,
    },
    strategies: {
      local: {
        token: {
          property: 'api_token',
          global: true,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: false,
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

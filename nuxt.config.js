import colors from 'vuetify/es5/util/colors'

const features = [
  'es2015',
  'es2017',
  'IntersectionObserver',
  'IntersectionObserverEntry',
].join('%2C')

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: 'true',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'server',
  target: 'static',
  router: {
    base: '/tp/',
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + 'MATRIS LIGHT',
    title: 'MATRIS LIGHT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Mulish',
        type: 'text/css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP',
        type: 'text/css',
      },
    ],
    script: [
      {
        src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`,
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/status'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  publicRuntimeConfig: {
    // API_ENDPOINT: process.env.API_ENDPOINT,
    STATIC_URL: process.env.STATIC_URL || '/matris.js/',
    // STATIC_URL: process.env.STATIC_URL || '/',
  },

  privateRuntimeConfig: {
    PRIVATE_ENDPOINT: process.env.PRIVATE_ENDPOINT,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      icons: 'mdi',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#add8e6',
          accent: '#97afdb',
          secondary: '#c7cbd1',
          info: colors.teal.lighten1,
          warning: '#fceb9c',
          error: '#fdc7ce',
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },

  serverMiddleware: [
    // cookieParser(),
    // bodyParser.json(),
    {
      path: '/_liveness',
      handler(_req, res) {
        res.end('pong')
      },
    },
    {
      path: '/_readness',
      handler(_req, res) {
        res.end('pong')
      },
    },
  ],
}

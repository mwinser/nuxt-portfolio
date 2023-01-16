const getArgument = (argToCheck) => {
  const position = process.argv.findIndex((arg) => arg === argToCheck)
  if (position === -1) {
    return false
  }
  return process.argv[process.argv.findIndex((arg) => arg === argToCheck) + 1]
}

const name = getArgument('--entry-name')

export default {
  telemetry: false,
  target: 'static',
  // ssr: false, // This should only be false if you don't want the HTML to render.
  dir: {
    layouts: `entries/${name}/layouts`,
    pages: `entries/${name}/pages`,
  },
  generate: {
    dir: `dist/${name}`,
    fallback: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mwinser.com',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { property: 'og:url', content: 'https://mwinser.com.com' },
      { property: 'og:title', content: 'mwinser.com' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content: '',
      },
      {
        property: 'og:image',
        content: 'https://mwinser.com.com/share.jpg',
      },
      { property: 'og:height', content: '630' },
      { property: 'og:width', content: '1200' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'mwinser.com' },
      {
        name: 'twitter:description',
        content: '',
      },
      {
        name: 'twitter:image',
        content: 'https://mwinser.com.com/share.jpg',
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // script: [
    //   { src: 'scripts/xrextras.js', defer: true },
    //   {
    //     type: 'text/javascript',
    //     src: '//cdn.curator.io/3.1/js/curator.js',
    //     body: true,
    //   },
    // ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/directives.client.js',
    '~plugins/js-logger.js',
    '~plugins/viewport.js',
    '~plugins/vue-the-mask.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // https://nuxtjs.org/docs/configuration-glossary/configuration-transition/
  pageTransition: {
    mode: 'out-in',
  },
  layoutTransition: {
    mode: 'out-in',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://www.npmjs.com/package/@nuxtjs/apollo
    '@nuxtjs/apollo',
    // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/recaptcha',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Fix warnings for latest version of Nuxt: https://stackoverflow.com/questions/68663581/latest-nuxt-v2-15-7-install-with-babel-loose-option-warnings
    analyze: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    devtools: process.env.NODE_ENV !== 'production',
    // Fixes issues with Chrome Devtools: https://github.com/vuejs-templates/webpack/issues/1331
    loaders: {
      // scss: { sourceMap: process.env.NODE_ENV === 'production' },
      // vue: { cacheBusting: process.env.NODE_ENV === 'production' },
    },
    optimizations: {
      minimize: process.env.NODE_ENV === 'production',
      realContentHash: process.env.NODE_ENV === 'production',
    },
  },

  server: {
    host: '0.0.0.0',
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      size: 'normal',
      version: 3,
    },
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    disableRecaptcha: process.env.DISABLE_RECAPTCHA || false,
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js',
    },
  },

  sitemap: {
    hostname: 'https://mwinser.com.com',
    gzip: true,
    exclude: [],
  },

  styleLint: {
    configFile: '~stylelint.config.js',
  },

  // https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['assets/scss/global.scss'],
  },
}

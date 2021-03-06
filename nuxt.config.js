export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Carter Duong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'robots',
        content: 'noindex'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg',
        href: 'favicon.svg'
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/jmz4hgy.css' }
    ],
    script: [
      {
        src: 'https://cdn.usefathom.com/script.js',
        site: 'YTMBEHCB',
        defer: 'true'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

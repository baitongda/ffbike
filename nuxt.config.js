module.exports = {
  mode: 'universal',
  buildDir: 'nuxt-dist',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '国际物流圈',
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
  env: {
    baseUrl: 'https://forumtestapi.witranscn.com'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true
    //retry: false, // 默认值，自动拦截失败的请求并在可能的情况下重试它们3次
    // See https://github.com/nuxt-community/axios-module#options
  },

  // proxy: {
  //   '/api/': {
  //     target: 'https://forumtestapi.witranscn.com/', // 目标服务器ip
  //     pathRewrite: {
  //       '^/api/': '/',
  //       changeOrigin: true
  //     }
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axios.js',
    // '~/plugins/request.js',
    // '~/plugins/api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    //'@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     // Using package name
     '@nuxtjs/axios',
     '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

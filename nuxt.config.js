export default {
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

  //loading: '~components/loading.vue',
  // googleAnalytics: {
  //   id: 'UA-XXX-X'
  //   id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  // },

  validate({ params, query }) {
    return /^d+$/.test(params.id) // must be number
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // axios  拦截器
    {
      src:'~/plugins/axios',
      'ssr':true     //  服务端渲染
    },
    // axios  拦截器
    {
      src:'~/plugins/api',
      'ssr':true     //  服务端渲染
    },
    { src: '~/plugins/analytic.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    //'@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/setup
    //'@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // 请求代理配置，解决跨域
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    retry: { retries: 3 }, // 默认值，自动拦截失败的请求并在可能的情况下重试它们3次
    withCredentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://forumtestapi.witranscn.com', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://forumtestapi.witranscn.com'
  },
  // 客户端相关
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL // 浏览器请求
    }
  },
  // 服务端
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL // 服务器请求
    }
  },

  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

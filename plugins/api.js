import userModule from '../api/user'
export default function ({ $axios }, inject) {
  const apiModules = {}
  $axios.onRequest((config) => {
  	// 相关配置
  })
  apiModules.user = userModule($axios)
  // Inject to context as $api
  inject('api', apiModules)
}

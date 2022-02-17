export default ({ app: { $request } }, inject) => {
  inject('api', {
    /**
     * 获取首页列表
     * @param {string} first - 单页数 默认20
     */
    getUserList (params = {}) {
      return $request.get('/user/index', params)
    },
  })
}

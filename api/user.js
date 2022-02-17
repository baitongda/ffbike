export default $axios => ({
  getUser () {
    return $axios.$get('/user/index')
  },
  // 其它接口
})

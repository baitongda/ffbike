export default $axios => ({
  getUserList () {
    return $axios.$get('/user/index')
  },
  // 其它接口
})

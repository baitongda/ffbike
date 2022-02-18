// store\user.js
export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

export const actions = {
  // 账号密码登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      clientSetting.username = username.trim()
      clientSetting.password = password
      // 调接口
      this.$api.passport
        .login(clientSetting)
        .then(res => {
          // 接口返回 token 并保存
          commit('SET_TOKEN', res.access_token)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export const getters = {
  isLogin: state => !!state.token
}

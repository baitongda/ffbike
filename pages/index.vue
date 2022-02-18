<template>

  <div>
    <h1>国际物流圈</h1>
    <button v-on:click="getUserList">获取用户</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data(){
    return{

    }
  },
  async asyncData ({ $api }) {
    const res = await $api.user.getUserList()
    console.log(res)
  },
  methods: {
    // 导航切换
    selectIndex(){
      this.$store.commit('selectIndex')
      this.$router.push('/')
    },
    selectCompanyProfile(){
      this.$store.commit('selectCompanyProfile')
      this.$router.push('/companyProfile')
    },
    selectNews(){
      this.$store.commit('selectNews')
      this.$router.push('/news')
    },
    selectProductShow(){
      this.$store.commit('selectProductShow')
      this.$router.push('/productShow')
    },
    selectHealthy(){
      this.$store.commit('selectHealthy')
      this.$router.push('/healthy')
    },
    selectContact(){
      this.$store.commit('selectContact')
      this.$router.push('/contact')
    },
    // 导航切换部分结束
    getUserList () {
      this.$api.user.getUserList().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

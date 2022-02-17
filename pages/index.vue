<template>
  <div>
    <h1>国际物流圈</h1>
    <button v-on:click="getUserList">获取用户</button>
  </div>
</template>

<script>

export default {
  async asyncData ({ $api }) {
    const res = await $api.user.getUserList()
    console.log(res)
  },
  methods: {
    getUserList () {
      this.$api.user.getUserList().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

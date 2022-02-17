<template>
  <div>
    <h1>国际物流圈</h1>
  </div>
</template>

<script>

export default {
  async asyncData({$axios}){
    const res = await $axios({url:'/api/user/index'})
    console.log(res)
  }
}
</script>

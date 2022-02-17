<template>
  <div>
    <h1>hello world</h1>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
        const res = await $axios({url:'/user/index'})
        console.log(res.data.list.data)
  }
};
</script>
<style lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>

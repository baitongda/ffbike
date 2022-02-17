<template>
  <div>
    <h1>国际物流圈</h1>
  </div>
</template>

<script>
//import reachBottom from '~/mixins/reachBottom'

export default {
  async asyncData({$axios}){
    let res = await $axios('https://forumtestapi.witranscn.com/user/index')
    console.log('res', res['data'])
  }
}
</script>

<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-nav class="ml-auto">
        <b-nav-item :class="{active:$store.state.show==1}" @click="selectIndex()">首页</b-nav-item>
        <b-nav-item :class="{active:$store.state.show==2}" @click="selectCompanyProfile()" >企业概况</b-nav-item>
        <b-nav-item :class="{active:$store.state.show==3}" @click="selectNews()">新闻中心</b-nav-item>
        <b-nav-item :class="{active:$store.state.show==4}" @click="selectProductShow()">产品展示</b-nav-item>
        <b-nav-item :class="{active:$store.state.show==5}" @click="selectHealthy()">肽与健康</b-nav-item>
        <b-nav-item :class="{active:$store.state.show==6}" @click="selectContact()">联我们</b-nav-item>
      </b-navbar-nav>

    </b-navbar>

  </div>
</template>

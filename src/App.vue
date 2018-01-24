<template>
  <div id="app">
    <div class="layout">
      <div class="banner">
        <img src="../static/images/header_02.jpg"/>
      </div>
    </div>
    <div class="nav-top">
      <!-- 引入公用的头部 header组件 -->
      <v-header></v-header>
    </div>
    <div class="contianer">
      <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件，也就是home组件  -->
      <router-view></router-view>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    .contianer {
      position: relative;
      width: 100%;
      min-height: 1000px;
      background: #ebf6fc;
    }
    .footer {
      width: 100%;
      height: 20%;
      text-align: center;
    }
    .nav-top {
      width: 100%;
    }
  }

  .banner {
    margin: 0 auto;
    width: 100%;
    height: 384px;
    text-align: center;
    overflow: hidden;
    image {
      display: inline-block;
      height: 384px;
      width: 1000px;
    }
  }
</style>

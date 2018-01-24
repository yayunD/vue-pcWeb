<template>
  <div class="home">
    <div class="layout">
      <!--轮播图-->
    <div class="carBg">
      <el-carousel :interval="3000" type="card" height="300px" style="width: 1000px;">
        <el-carousel-item :key="1" class="shadow">
          <img src="../../static/images/1.jpg" alt="1"/>
        </el-carousel-item>
        <el-carousel-item :key="2">
          <img src="../../static/images/2.jpg" alt="2"/>
        </el-carousel-item>
        <el-carousel-item :key="3">
          <img src="../../static/images/3.jpg" alt="3"/>
        </el-carousel-item>
        <el-carousel-item :key="4">
          <img src="../../static/images/4.jpg" alt="4"/>
        </el-carousel-item>
      </el-carousel>
    </div>
      <v-textContent class="Content"></v-textContent>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import text from '../components/textContent.vue'
export default {
  components: {
    'v-textContent': text
  }
}
</script>
<style lang="scss" scoped>
  @import '../style/index';
  .home {
    height: 600px;
    .carBg{
      overflow: hidden;
      padding: 30px 0;
    }
  }
</style>

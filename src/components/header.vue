<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="layout">
        <ul class="nav">
          <li class="router-link-active">
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/ResearchProject">科研项目</router-link>
          </li>
          <li>
            <router-link to="/Achievements">科研成果</router-link>
          </li>
          <li>
            <router-link to="/consult">竞赛获奖</router-link>
          </li>
          <li>
            <router-link to="/employment">团队成员</router-link>
          </li>
          <li>
            <router-link to="/news">新闻通知</router-link>
          </li>
          <li>
            <router-link to="/contactUs">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../style/index';
  .el-carousel__item img {
    display: inline-block;
    color: #475669;
    width:400px;
    font-size: 14px;
    height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

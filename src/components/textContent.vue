<template>
  <div class="textContent layout">
    <div class="ContentLeft">
      <div class="introduce">
        <span>实验室简介</span><span>Introduce</span>
      </div>
      <dl>
        <dt><h3>实验室简介</h3></dt>
        <dd>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
          <P>安徽大学是安徽大学是安徽大学是安徽大学是安徽大学是安徽大</P>
        </dd>
      </dl>
    </div>
    <div class="ContentRight">
      <div class="introduce">
        <span>实验室动态</span><span>News</span>
      </div>
    <div calss="text">
      <h3>实验室动态</h3>
      <h4><span onclick="addNews"><a href="javascript:;">+</a></span><span>更多</span></h4>
      <ul class="newsContent">
        <li v-for="item in news"><span>{{item.id}}</span><a href="javascript:;">{{item.title}}</a></li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        news: [{
          id: '1',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '2',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '3',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '4',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '5',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '6',
          title: '安徽大学是国是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '7',
          title: '家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '8',
          title: '安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '9',
          title: '最新科研项目',
          content: '内容区域内容区域'
        }, {
          id: '10',
          title: '最新科研项目',
          content: '内容区域内容区域'
        }, {
          id: '11',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }, {
          id: '12',
          title: '最新科研项目',
          content: '内容区域内容区域'
        }, {
          id: '13',
          title: '安徽大学是国家安徽大学安徽大学,安徽大学是国家安徽大学安徽大学',
          content: '内容区域内容区域'
        }]
      }
    },
    methods: {
      addnews () {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../style/index';

  .textContent {
    width: 100%;
    overflow: hidden;
    .ContentLeft {
      .introduce {
        width:100%;
        overflow: hidden;
        border-bottom: 1px #ae4857 solid;
        margin-bottom: 17px;
        span{
          margin-bottom: 10px;
          font-size: 17px;
        }
        span:nth-child(1){
          float: left;
          overflow: hidden;
          line-height: 20px;
          border-left: 7px #ae4857 solid;
          color: #a12f0d;
          padding-left: 15px;
          font-weight: bold;
        }
        span:nth-child(2){
          float: right;
          overflow: hidden;
          line-height: 20px;
          color: rgb(244,218,209);
          font-size: 20px;
        }
      }
      width: 49%;
      float: left;
      overflow: hidden;
      dl {
        background: white;
        border: 1px #d7d7d7 solid;
        overflow: hidden;
        text-space: 2px;
        text-align: center;
        dt {
          padding: 10px 60px;
        }
        dd {
          padding: 0 0 0 20px;
          p {
            margin-bottom: 10px;
          }
        }
      }
    }
    .ContentRight {
      width: 49%;
      float: right;
      overflow: hidden;
      .introduce {
        width:100%;
        overflow: hidden;
        border-bottom: 1px #ae4857 solid;
        margin-bottom: 17px;
        span{
          margin-bottom: 10px;
          font-size: 17px;
        }
        span:nth-child(1){
          float: left;
          overflow: hidden;
          line-height: 20px;
          border-left: 7px #ae4857 solid;
          color: #a12f0d;
          padding-left: 15px;
          font-weight: bold;
        }
        span:nth-child(2){
          float: right;
          overflow: hidden;
          line-height: 20px;
          color: rgb(244,218,209);
          font-size: 20px;
        }
      }
      .text{
        background: white;
        border: 1px #d7d7d7 solid;
        background: white;
        h3 {
          padding: 10px 60px;
        }
        h4 {
          text-align: right;
          padding-right: 30px;
          span {
            line-height: 20px;
          }
          span:first-child {
            font-size: 20px;
            font-weight: bolder;
          }
          span:last-child {
            font-size: 16px;
          }
      }
      }
      .newsContent {
        text-align: left;
        height: 330px;
        overflow-y: scroll;
        padding: 10px 0px 10px 5px;
        li {
          padding: 0 0 10px 0;
          display: inline-block;
          width: 460px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            display: inline-block;
            width: 20px;
            line-height: 20px;
            background: grey;
            color: white;
            text-align: center;
            margin-right: 5px;
          }
          &:hover a {
            color: dodgerblue;
            text-decoration: underline;
          }
          &:hover span {
            background: dodgerblue;
            color: white;
          }
        }
      }
    }
  }
</style>

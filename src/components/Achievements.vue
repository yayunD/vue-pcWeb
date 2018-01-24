<template>
  <div class="appWapper">
    <div class="layout">
      <el-tabs  style="margin-top: 20px">
        <el-tab-pane label="论文展示">
          <div class="layout">
            <ul class="AchText" v-for="item in AchList ">
              <li>
                <div><span>{{item.id}}</span>{{item.suoyin}}</div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="专利展示">
          <div class="layout">
            <ul class="AchText" v-for="item in AchList ">
              <li>
                <div><span>{{item.id}}</span>{{item.AchText}}</div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="layout">
      <div class="page">
        <el-pagination v-if="AchList" align="right" @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="pageCon.pageNo"
                       :page-sizes="[5,10,20,30,50]" :page-size="pageCon.pageSize"
                       layout="total, sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        total: 9,
        pageCon: {
          pageNo: 1,
          pageSize: 5
        },
        AchList: [{
          id: '0',
          title1: '关于人工智能字典学习',
          title2: '全国杰出人才',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          id: '1',
          title1: '关于人工智能字典学习',
          title2: '计算机牛逼达人',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          id: '2',
          title1: '关于人工智能字典学习',
          title2: '世界最牛逼的',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          id: '3',
          title1: '关于人工智能字典学习',
          title2: '傻逼',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          id: '4',
          title1: '关于人工智能字典学习',
          title2: '获得专列',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          id: '5',
          title1: '关于人工智能字典学习',
          title2: '获得专列',
          suoyin: '   主要责任者.文献题名［J］.刊名，年，卷（期）   何龄修.读南明史［J］\n' +
          '              .中国史研究，1998，(3)  OU J P，SOONG T T，et al.Recent advance in \n' +
          '              research on applications of passive energy dissipation systems［J］.Earthquack \n' +
          '              Eng,1997,38(3)',
          AchText: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }]
      }
    },
    methods: {
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../style/index';

  .appWapper {
    overflow: hidden;
    .layout {
      .sub_nav {
        margin: 0;
        padding: 0;
        overflow: hidden;
        margin-top: 50px;
        span {
          text-align: center;
          color: white;
          float: left;
          display: inline-block;
          width: 100px;
          line-height: 50px;
          background: deepskyblue;
          &:hover {
            background: lightskyblue;
          }
        }
        span.router-link-active {
          background: #c10514;
        }
      }
    }
    .AchText {
      overflow: hidden;
      width: 100%;
      border-bottom: 1px #999999 solid;
      border-top: none;
      overflow: hidden;
      background: white;
      li {
        float: left;
        overflow: hidden;
        line-height: 50px;
        background: rgba(188, 202, 202, .3);
        width: 100%;
        border-right: 1px #8c939d solid;
        text-align: left;
        &:hover {
          background: ghostwhite;
        }
        h4 {
          margin: 20px;
        }
        div {
          margin: 20px;
          span {
            display: inline-block;
            width: 20px;
            line-height: 20px;
            background: grey;
            color: white;
            text-align: center;
            margin-right: 5px;
          }
          a {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
        }
      }
      /*dd {*/
      /*height: 200px;*/
      /*width: 49.9%;*/
      /*float: right;*/
      /*overflow: hidden;*/
      /*text-align: left;*/
      /*h4 {*/
      /*margin: 0 0 15px 20px;*/
      /*padding: 10px;*/
      /*a:hover {*/
      /*color: dodgerblue;*/
      /*}*/
      /*}*/
      /*div {*/
      /*margin: 5px 10px;*/
      /*display: -webkit-box;*/
      /*-webkit-box-orient: vertical;*/
      /*-webkit-line-clamp: 4;*/
      /*overflow: hidden;*/
      /*a:hover {*/
      /*color: blue;*/
      /*text-decoration: underline;*/
      /*}*/
      /*}*/
      /*.time {*/
      /*display: inline-block;*/
      /*float: right;*/
      /*overflow: hidden;*/
      /*}*/
      /*}*/
    }
  }

  .page {
    margin: 30px 0;
  }
</style>

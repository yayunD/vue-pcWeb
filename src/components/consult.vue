<template>
  <div class="Project">
    <div class="layout">
      <dl class=" ProjectText" v-for="item in projectList">
        <dt><img :src="item.imgUrl"/></dt>
        <dd>
          <h3 class="title"><a href="javascript:;">{{item.title}}</a></h3>
          <div>
            <a href="javascript:;">{{item.project}}
            </a>
          </div>
          <h5 class="time">2017年1月20日</h5>
        </dd>
      </dl>
      <div class="page">
        <el-pagination v-if="projectList" align="right" @size-change="handleSizeChange"
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
          pageSize: 10
        },
        projectList: [{
          imgUrl: '../../static/images/title.png',
          title: '关于使用核武器打击犯罪分子',
          project: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          imgUrl: '../../static/images/title.png',
          title: '关于使用核武器打击犯罪分子',
          project: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          imgUrl: '../../static/images/title.png',
          title: '关于使用核武器打击犯罪分子',
          project: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          imgUrl: '../../static/images/title.png',
          title: '关于使用核武器打击犯罪分子',
          project: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
          '              党组成员，国务院学位委员会委员、国务院学位委员会学科评议组成员，\n' +
          '              十五国家863计划先进制造与…'
        }, {
          imgUrl: '../../static/images/title.png',
          title: '关于使用核武器打击犯罪分子',
          project: '  中国工程院院士，清华大学信息学院院长兼软件学院院长，国家自然科学基金委员会副主任、\n' +
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

  .Project {
    overflow: hidden;
    .ProjectText {
      width: 100%;
      padding: 20px;
      border: 1px #999999 solid;
      border-top: none;
      overflow: hidden;
      dt {
        border: 1px #999999 solid;
        float: left;
        overflow: hidden;
        padding: 5px;
        margin-right: 20px;
        img {
          display: inline-block;
          height: 132px;
          width: 180px;
        }
      }
      dd {
        padding: 10px;
        text-align: left;
        h3 {
          padding: 10px;
          a:hover {
            color: dodgerblue;
          }
        }
        div {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
          a:hover {
            color: blue;
            text-decoration: underline;
          }
        }
        .time {
          float: right;
          overflow: hidden;
        }
      }
    }
    .page{
      margin:40px 0px;
    }
  }
</style>

<template>
  <div class="appWapper">
    <div class="layout">
      <el-tabs style="padding-top: 20px;">
        <el-tab-pane label="团队成员">
          <div class="showTeam" v-for="(item,index) in tutorList">
            <p class="title">{{item.title}}</p>
            <div class="person shadow" v-for=" aa in  tutorList[index].playList">
              <div class="photoList">
                <div class="tutorList">
                  <img :src="aa.photo">
                </div>
                <div>
                  <span>{{aa.honor}}</span>
                  <span>{{aa.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="导师">
          <div class="layout">
            <div class="photoList shadow">
              <div class="tutorList">
                <img src="../../static/images/title2.png">
              </div>
              <div>
                <span>教授</span>
                <span>李学俊</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="博士">
          <div class="layout">
            <div class="photoList" v-for="item in doctor">
              <div class="tutorList">
                <img :src="item.photo">
              </div>
              <div>
                <span>{{item.honor}}</span>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        tutorList: [
          {
            title: '导师',
            playList: [
              {
                honor: '导师',
                name: '李学俊',
                photo: '../../static/teamPhoto/honor.jpg'
              }
            ]
          }, {
            title: '博士',
            playList: [
              {
                honor: '博士',
                name: '徐佳（14级）',
                photo: '../../static/teamPhoto/doctoer1.jpg'
              }
            ]
          }, {
            title: '已毕业研究生',
            playList: [{
              honor: '硕士',
              name: '赵礼良（11级）',
              photo: '../../static/teamPhoto/11zll.jpg'
            }, {
              honor: '硕士',
              name: '马飞（11级）',
              photo: '../../static/teamPhoto/11mf.jpg'
            }, {
              honor: '硕士',
              name: '章玉龙（11级）',
              photo: '../../static/teamPhoto/11zyl2.jpg'
            }, {
              honor: '硕士',
              name: '周思雨（12级）',
              photo: '../../static/teamPhoto/12zsy.jpg'
            }, {
              honor: '硕士',
              name: '姚德山（12级）',
              photo: '../../static/teamPhoto/12yds.jpg'
            }, {
              honor: '硕士',
              name: '李宗生（12级）',
              photo: '../../static/teamPhoto/12lzs.jpg'
            }, {
              honor: '硕士',
              name: '王小龙（12级）',
              photo: '../../static/teamPhoto/12wxl.jpg'
            }, {
              honor: '硕士',
              name: '吴洋（13级）',
              photo: '../../static/teamPhoto/13wy.jpg'
            }, {
              honor: '硕士',
              name: '张树文（13级）',
              photo: '../../static/teamPhoto/13ysw.jpg'
            }, {
              honor: '硕士',
              name: '汪坤兵（14级）',
              photo: '../../static/teamPhoto/14wkb.jpg'
            }, {
              honor: '硕士',
              name: '程慧敏（14级）',
              photo: '../../static/teamPhoto/14chm.jpg'
            }]
          }, {
            title: '本科生',
            playList: [{
              honor: '本科生',
              name: '某某本科生',
              photo: '../../static/images/title.png'
            }, {
              honor: '本科生',
              name: '某某本科生',
              photo: '../../static/images/title.png'
            }, {
              honor: '本科生',
              name: '某某本科生',
              photo: '../../static/images/title.png'
            }]
          }],

        doctor: [{
          title: '博士',
          honor: '博士',
          name: '某某某1',
          photo: '../../static/images/title.png'
        }, {
          honor: '博士',
          name: '某某某2',
          photo: '../../static/images/title.png'
        }, {
          honor: '博士',
          name: '某某3',
          photo: '../../static/images/title.png'
        }, {
          honor: '博士',
          name: '某某某4',
          photo: '../../static/images/title.png'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../style/index';

  .showTeam {
    overflow: hidden;
  }

  .title {
    text-align: left;
    font-size: 20px;
    color: #c10514;
    font-weight: bolder;
    margin-top: 20px;
    padding: 5px 0px 5px 0px;
    border-bottom: 1px #d3d4d6 solid;
  }

  .person {
    background: white;
    overflow: hidden;
    width: 20%;
    float: left;
    margin-right: 66px;
    margin-bottom: 20px;
    margin-top: 20px;
    &:nth-of-type(4n+4) {
      float: right;
      margin-right: 0;
    }
  }

  .photoList {
    display: inline-block;
    overflow: hidden;
    text-align: center;
    background: white;
  }

  .tutorList {
    display: inline-block;
    overflow: hidden;
    img {
      display: inline-block;
      width: 200px;
      height: 217px;
    }
  }
</style>

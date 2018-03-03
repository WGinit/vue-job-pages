<template>
  <div class="footer">
    <tabbar>
      <tabbar-item :selected="url == 'http://localhost:8090/views/home/home.html'" link="http://localhost:8090/views/home/home.html">
        <span slot="icon" class="iconfont icon-home"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item class="item2" :selected="url == 'http://localhost:8090/views/course/course.html#/recommend'" link="http://localhost:8090/views/course/course.html">
        <span slot="icon" class="iconfont icon-class"></span>
        <span slot="label">课程</span>
      </tabbar-item>
      <tabbar-item :selected="url == 'http://localhost:8090/views/recruit/recruit.html'" link="http://localhost:8090/views/recruit/recruit.html">
        <span slot="icon" class="iconfont icon-zhaoping"></span>
        <span slot="label">招聘</span>
      </tabbar-item>
      <tabbar-item  :selected="url == 'http://localhost:8090/views/message/message.html#/notice'" link="http://localhost:8090/views/message/message.html#/notice">
        <span slot="icon" class="iconfont icon-msg"></span>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item :selected="url == 'http://localhost:8090/views/user/user.html'" link="http://localhost:8090/views/user/user.html">
        <span slot="icon" class="iconfont icon-me"></span>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      dafault: '首页',
      url: location.href
    }
  }
}
</script>
<style lang="less" >
    .footer{
        position: fixed;
        bottom: 0;
        width:100%;
        height: 1.333333rem;
        .weui-tabbar{
          height: 1.333333rem;
        }
        .weui-tabbar__item.vux-tabbar-simple{
          height: 1rem;
          line-height: 1rem;
          p{
            font-size: .346667rem;
            color: #727071;
            line-height: 1rem;
          }
          
        }
        .weui-tabbar__icon{
          width: auto;
          height: auto;
          .iconfont{
            font-size: .65rem;
            line-height: .8rem;
          }
          .icon-class{
            font-size: .55rem;
            line-height: .8rem;
          }
          // .icon-zhaoping:before, .icon-class:before,.icon-me:before{
          //   font-weight: bold
          // }
          
        }
        .item2 .weui-tabbar__label{
             margin-top: -.13rem;
          }
        .weui-tabbar__label{
            font-size: .346667rem;
            color: #727071;
            margin-top:-.13rem;
          }
    }
</style>

<template>
  <div class="user">
    <h3>个人中心</h3>
    <div class="member">
      <div class="avatar"><img src="" alt="用户头像"></div>
      <a href="/views/member/member.html">登录-注册</a>
    </div>
    <div class="member-nav">
      <div class="item"><a href="">课程订单</a></div>
      <div class="item"><a href="">在线课程</a></div>
      <div class="item"><a href="">我的简历</a></div>
      <div class="item"><a href="">我的投递</a></div>
    </div>

    <div class="footer">
        <Navbar></Navbar>
    </div>
    
  </div>
</template>

<script>
import Navbar from 'components/Footerbar'
import Lib from 'static/js/lib';

export default {
  data() {
    return {

    }
  },
  components: {
	Navbar
  },
  props: {
	headfont: {
		type: String,
		default: '导航'
	}
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
  
  
	
  },
  //相关操作事件
  methods: {
	
  }
}
</script>

<style lang="less">
.user{
  background: #fff;
  overflow: hidden;
  .member{
    width:100%;
    height: 3rem;
  }
  .member-nav{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    overflow: hidden;
    .item{
      flex: 1;
      text-align: center
    }
  }
}


</style>

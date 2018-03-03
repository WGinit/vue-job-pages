<template>
  <div>
  <div class="page-title"><span class="iconfont icon-left" @click="goBack"></span>{{headtext}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
 
  props: {
    headtext: {
      type: String,
      default: '标题'
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
    goBack() {
        this.$router.back(-1);
    }
  }
}
</script>

<style lang="less">
.page-title{
    width: 100%;
    height: 1.133333rem;
    line-height: 1.133333rem;
    padding: 0 ;
    background-color: #fd5353;
    color: #fff;
    font-size: .48rem;
    text-align: center;
    overflow: hidden;
    span{
        position: absolute;
        left: 0;
        width:1.2rem;
        font-size: .5rem;
    }
}

</style>

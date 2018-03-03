<template>
  <div class="ariticle">
      新闻资讯列表页
  </div>
</template>

<script>

import Lib from 'static/js/lib';
const url = location.href;


export default {
  data() {
    return {

    }
  },
  components: {
	
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
    this.getData();
  },
  //相关操作事件
  methods: {
    getData () {
      var articleId = Lib.M.getUrlQuery('id', url);
      Lib.M.ajax({
        'type':'Get',
        'url':'http://www.86ym.cn/api/article?id='+articleId,
        'success': function(res){
          console.log(res);
        }
      })
    }
  }
}
</script>

<style lang="less">


</style>

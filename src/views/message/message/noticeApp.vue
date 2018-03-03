<template>
  <div class="notice">
    <scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" height="1200px" @on-pulldown-loading="load" v-model="status" ref="demo">
    
      <!-- <div class="box2">
        <p v-for="i in 80">通知消息{{i}}</p>
      </div> -->
        <div v-for="item in dataJSON2.lists">
            <p>{{item.author_name}}</p>
            <p>{{item.date}}</p>
            <p>{{item.desc}}</p>
        </div>
        <div v-for="item in dataJSON1.lists">
            <p>{{item.author_name}}</p>
            <p>{{item.date}}</p>
            <p>{{item.desc}}</p>
            
        </div>
    </scroller>
  </div>
</template>

<script>
import Lib from 'static/js/lib'

import { Scroller} from 'vux'
export default {
  components: {
    Scroller
  },
    mounted(){
        this.notice();
    },
  methods: {
    notice () {
       var self = this;
       Lib.M.ajax({
        'type': 'GET',
        'url':'/listnews',
        'success':function (data){
            console.log(data);
            self.dataJSON1 = data;
            }
        }); 
    },
    load () {
        var self = this;
      setTimeout(() => {
        this.status.pulldownStatus = 'default'
      }, 2000)
     
      this.$vux.loading.show({
         text: 'Loading'
      });
    
    Lib.M.ajax({
        'type': 'GET',
        'url':'/listnews',
        'success':function (data){
            console.log(data);
            self.dataJSON2 = data;
            
            setTimeout(()=>{
                self.$vux.loading.hide();
            },1000);
            
        }
    });		
     
    }
   
  },
  data () {
    return {
      n1: 10,
      status: {
        pulldownStatus: 'default'
      },
      'dataJSON1': {},
      'dataJSON2': {}
    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  transform: rotate(-180deg);
}
.pulldown-arrow {
  display: inline-block;
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>

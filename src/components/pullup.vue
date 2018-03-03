<template>
  <div>
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig"  ref="demo" height="15rem" v-model="status" @on-pullup-loading="load">
      <ul class="news-lists">      
        <li v-for="item in lists1"><a :href="item.url">
            <div class="img"><img :src="item.pic" alt=""></div>
            <div class="text">
              <div class="title">{{item.title}}</div>
              <div class="time">{{item.date}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </a>
          </li>
          <li v-for="item in lists2">
            <a :href="item.url">
              <div class="img"><img :src="item.pic" alt=""></div>
              <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="time">{{item.date}}</div>
                <div class="desc">{{item.desc}}</div>
              </div>
            </a>
          </li>
          </ul>
    </scroller>

  </div>
</template>

<script>
import Lib from 'static/js/lib'
import { Scroller } from 'vux'
export default {
  components: {
    Scroller
  },
  mounted () {
    this.listnews()
  },
  methods: {
    listnews(){
      var self1 = this;
      Lib.M.ajax({
        'type': 'GET',
        'url':'/listpicnews',
        'success':function (data){
            console.log(data);
            self1.lists1 = data.articles;
        }
      })
    },
    load () {
      var self2 = this;
      Lib.M.ajax({
        'type': 'GET',
        'url':'/listpicnews',
        'success':function (data){
            console.log(data);
            if(data){
              self2.lists2 = data.articles;
              
            }
          
        }
    });	

      // setTimeout(() => {
      //   this.n += 10
      //   setTimeout(() => {
      //     this.$refs.demo.donePullup()
      //   }, 100)
      //   // if (this.n2 === 30) { // unload plugin
      //   //   setTimeout(() => {
      //   //     this.$refs.demo.disablePullup()
      //   //   }, 100)
      //   // }
      // }, 2000)
    }
  },
  data () {
    return {
      status: {
        pullupStatus: 'default'
      },
      n: 30,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      lists1: {},
      lists2: {}
    }
  }
}
</script>

<style lang="less">
.news-lists{
  width:100%;
  overflow: hidden;
  a{
    display: block;
  }
  li{
    width: 100%;
    height: 2.5rem;
    overflow: hidden;
  }
  .img{
    width:30%;
    height: 2.5rem;
    line-height: 2.5rem;
    float: left;
    overflow: hidden;
    img{
      display: inline-block;
      width:100%;
      vertical-align: middle;
    }
    
  }
  .text{
    width:66%;
    height: 2.1rem;
    float: left;
    font-size: .3rem;
    overflow: hidden;
    padding: .2rem;
    .title{
      width: 100%;
      line-height: .2rem;
      color: #333;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:1; 
      margin: .2rem;
      height: .3rem;
      line-height: .3rem;
      text-align: left;
    }
    .desc{
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
      height: .8rem;
    }
  }
}

.box p{
  font-size: .4rem
}
.box-wrap {
  height: 600px;
  overflow: hidden;
}
.rotate {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.pullup-arrow {
  display: block;
  transition: all linear 0.2s;
  -webkit-transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
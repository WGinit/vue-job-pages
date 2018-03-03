<template>
  <div class="banner">
    <swiper :list="bannerlists" v-model="index" @on-index-change="demo01_onIndexChange" :loop="true" :auto="true" height="4rem"></swiper>
  </div>
</template>

<script>
import Lib from 'static/js/lib'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  ready () {
    
  },
  mounted(){
    this.banner();
  },
  methods: {
    banner() {
       var self = this;
       Lib.Com.ajax({
        'type': 'GET',
        'url':'/banner',
        'success':function (data){
            self.bannerlists = data.banners;
            }
        }); 
    },
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
   
  },
  data () {
    return {
      bannerlists:[],
      index: 1
    }
  }
}
</script>

<style lang="less">

.banner{
    width:100%;
    overflow: hidden;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
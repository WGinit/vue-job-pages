<template>
  <div class="recommend">
    <div class="banner">
        <swiper :aspect-ratio="300/800" :loop="true">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index" ><a :href="item.url"><img :src="item.img"></a></swiper-item>
        </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'

const baseList = [{
  url: 'http://baidu.com',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'http://lihua1108.com',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'http://86ym.cn',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Swiper,
    SwiperItem
  },
  ready () {

  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    }
  },
  data () {
    return {
      list: baseList
    }
  }
}
</script>
<style lang="less">
.vux-swiper-item img{
  width:100%;
}
</style>


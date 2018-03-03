<template>
  <div class="recruit-container">
    <div class="topmeau">
     <div class="city">
       <!-- <router-link to="/city"><span>深圳市</span> -->
       <City :cityName = "cityname"></City>
      <div id="allmap" class="allmap"></div>
    </div>
     <router-link to="/search">
      <div class="search">
          <div class="back-bg"></div>
          <div class="inputbox">
            <i class="iconfont icon-search"></i>
            <span>输入职位/公司/商区</span>  
          </div>
      </div>
      </router-link>
    </div>
    
    <div class="banner">
        <swiper  :loop="true" dots-position="center" height="5.333333rem">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index" ><a :href="item.url"><img :src="item.img"></a></swiper-item>
        </swiper>
    </div>
    <div class="tabnav">
        <div class="nav-item"><a href="../recruit/lastjob.html">
          <i class="iconfont icon-job"></i>
          <p>职位推荐</p></a>
        </div>
        <div class="nav-item"><a href="">
          <i class="iconfont icon-person"></i>
          <p>最新人才</p>
          </a></div>
        <div class="nav-item"><a href="">
          <i class="iconfont icon-company"></i>
          <p>名企招聘</p>
          </a></div>
        <div class="nav-item"><a href="">
          <i class="iconfont icon-meet"></i>
          <p>人才合作</p>
          </a></div>
    </div>
    <!-- 广告位 -->
    <div class="ads">
      <a href=""><img src="./images/down.jpg" alt=""></a>
    </div>

    <div class="content">
      <!-- 职位推荐 -->
      <div class="joblists">
        <div class="title vux-1px-b"><span>为你推荐好职位</span><a href="" class="iconfont icon-right">更多</a></div>
        <ul class="lists">
          <li class="vux-1px-b" v-for="(item, index) in jobLists" v-if="(index < 5)"><a href="item.url">
            <div class="head"><h3>{{item.job}}</h3><i class="item.icon">V</i><span class="salary">{{item.salary}}</span></div>
            <div class="desc">
              <div class="info">
                <span>{{item.province}}<i class="vux-1px-r"></i></span>
                <span>{{item.city}}<i class="vux-1px-r"></i></span>
                <span>{{item.experience}}<i class="vux-1px-r"></i></span>
                <span>{{item.education}}</span>
              </div> 
              <div class="time">{{item.send_time}}</div>
            </div>
            <div class="tags">
              <span  v-for="item1 in item.tag">{{item1}}</span>
            </div> 
            </a></li>
        </ul>
      </div>

    <!-- 职场锦囊 -->
    <div class="job-methods">
      <div class="title vux-1px-b"><span>职场锦囊</span><a href="" class="iconfont icon-right">更多</a></div>
      <div class="lists">
        <ul>
          <li v-for="(item,index) in methodsLists" v-if="(index<5)"><a :href="item.url">{{item.title}}</a> <span>{{item.time}}</span></li>
          
        </ul>
      </div>
    </div>
    <!-- 最新人才 -->
    <div class="job-person">
      <div class="title vux-1px-b"><span>最新人才</span><a href="" class="iconfont icon-right">更多</a></div>
      <div class="lists">
        <ul>
          <li class="vux-1px-b" v-for="(item,index) in personLists" v-if="(index<5)"><a href="item.url">
            <div class="image"><img :src="item.face" alt=""></div>
            <div class="info">
              <span class="name iconfont " :class="'icon-'+item.sex">{{item.ch}}</span>
              <p>
                <span>{{item.age}}岁</span>
                <span>{{item.education}}</span>
                <span>{{item.title}}</span>
              </p>
            </div>
            </a></li>
        </ul>
      </div>
    </div>
    <!-- 名企招聘 -->
    <div class="job-zhaoping">
      <div class="title vux-1px-b"><span>名企招聘</span><a href="" class="iconfont icon-right">更多</a></div>
      <div class="lists">
        <ul>
          <li v-for="(item,index) in companyLists" v-if="(index<9)" class="vux-1px"><img :src="item" alt=""></li>
        </ul>
      </div>
    </div>
    <!--  -->
    </div>

    <footer>
        <Navbar></Navbar>
    </footer>
  </div>
</template>

<script>
import Lib from 'static/js/lib'
import Navbar from 'components/Footerbar'
import City from 'components/city'
import {Swiper, SwiperItem} from 'vux'
import BMap from 'BMap'

const baseList = [{
  url: '',
  img: './images/banner.jpg',
  title: '送你一朵fua'
}, {
  url: 'm',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: '',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: '',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

// 职场锦囊 
const methodsLists = [{
  url:"",
  title: '招聘广告该怎么写才有效？',
  time: '11月21日'
},
{
  url:"",
  title: '你和出色的招聘经理相差有多远？',
  time: '11月21日'
},
{
  url:"",
  title: '为何百万年薪还是留不住你的心？',
  time: '11月21日'
},
{
  url:"",
  title: '迄今我看过最好的关于职业规划的文章',
  time: '11月21日'
}]

// 名企招聘
const companyLists = [
  './images/logo1.png',
  './images/logo2.png',
  './images/logo3.png',
  './images/logo4.png',
  './images/logo5.png',
  './images/logo6.png',
  './images/logo7.png',
  './images/logo8.png',
  './images/logo9.png',
]
export default {
  components: {
    Swiper,
    City,
    SwiperItem,
    Navbar
  },
  data () {
    return {
      cityname:'',
      list: baseList,
      jobLists: [],
      methodsLists: methodsLists,
      personLists:[],
      companyLists: companyLists,
      type: 'tab',
      address_detail: null,
      center: {lng: 116.40387397, lat: 39.91488908}
    }
  },
  mounted () {
      this.ready()
  },
  created () {
    // 获取token
    if (!localStorage.getItem("token")) {
      console.log("token已过期");
      Lib.Com.ajax({
        url: Lib.apiUrl.getToken,
        type: "GET",
        success: function(res) {
          localStorage.setItem("token", res.token);
          console.log(res.token);
        }
      });
    }
    let that = this;
    // 推荐职位
    Lib.Com.ajax({
      'url': Lib.apiUrl.recruit_lastjob,
      'type': 'POST',
      'success': function(res){
        if(res.code == 10001){
          for(let i in res.data){
              res.data[i].send_time = Lib.Date.formatterDate(res.data[i].send_time);
              res.data[i].tag = (res.data[i].tag).split('\\');
          }
        }
        that.jobLists = res.data;
      }
    })
    // 最新人才
    Lib.Com.ajax({
      'url': Lib.apiUrl.recruit_lastperson,
      'type': 'POST',
      'success': function(res){
        console.log('最新人才')
        console.log(res)
        if(res.code == 10001){
          that.personLists = res.data
        }
      }
    })
  },
  methods: {
     
      myFun (result) {
        let cityName = result.name;
        console.log("当前定位城市:"+cityName);
        this.cityname = cityName
     },
     ready () {
        let myCity = new BMap.LocalCity();
	      myCity.get(this.myFun);
        // let map = new BMap.Map('allmap')
        // let point = new BMap.Point(this.center.lng, this.center.lat)
        // map.centerAndZoom(point, 10)
        // map.enableScrollWheelZoom(true)
        // map.enableDoubleClickZoom(true)
        // var geolocation = new BMap.Geolocation()
        // geolocation.getCurrentPosition((r) => {
        //   if (r.point) {
        //     this.center.lng = r.longitude
        //     this.center.lat = r.latitude
        //     let markers = new BMap.Marker(r.point)
        //     map.addOverlay(markers)
        //     map.panTo(r.point)
        //     map.centerAndZoom(r.point, 16)
        //   }
        // }, { enableHighAccuracy: true })

        // var map = new BMap.Map("allmap");
  
      },
  }
}

</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.recruit-container{
    width:100%;
    background: #ededed;
    overflow: hidden;
    .topmeau{
      position: absolute;
      top:.2rem;
      height: .8rem;
      line-height: .8rem;
      color: #fff;
      z-index: 99;
      padding: 0 .266667rem;
      .city{
        display: inline-block;
        vertical-align: middle;
        font-size: .373333rem;
        width: 1.8rem;
        span{
          vertical-align: middle;
        }
        i{
          vertical-align: middle;
          font-size: .45rem;
          margin-left: .1rem;
        }
      }
      .search{
        position: relative;
        display: inline-block;
        width: 6.4rem;
        height: .8rem;
        line-height: .75rem;
        vertical-align: middle;
        margin-left: .33333rem;
        .back-bg{
          width:100%;
          height: 100%;
          background: #000;
          border-radius: .066667rem;
          opacity: .4;
        }
        .inputbox{
          position: absolute;
          top: 0;
          left: .2rem;
          color: #fff;
        }
        i{
          font-size: .4rem;
          display: inline-block;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .banner{
      width: 100%;
      height: 5.333333rem;
      img{
        width:100%;
        height: 5.333333rem;
      }
      .vux-slider .vux-indicator a{
        width: .4rem;
        margin: 0;
        text-align: center;
      }
      .vux-slider .vux-icon-dot{
        width: .2rem;
        height: .2rem;
        background: #fff;
        border-radius: 50%;
        transition: width .2s;
      }
      .vux-slider .vux-icon-dot.active{
        width:.4rem;
        background: #fff;
        border-radius: .5rem;
      }
    }
    .tabnav{
        width:100%;
        height: 2.133333rem;
        display: flex;
        background: #fff;
        .nav-item{
            flex:1;
            text-align: center;
            a{
                display: block;
                i{
                    font-size: .7rem;
                    color: #fff;
                    padding: .2rem;
                    line-height: 1.5rem;
                    border-radius: .35rem;
                }
                .icon-job{
                  background-color: #fcba6d
                }
                .icon-person{
                  background-color:#82b2f9
                }
                .icon-company{
                  background-color: #f6826a
                }
                .icon-meet{
                  background-color:#8ad280
                }
                p{
                  font-size: .426667rem;
                  margin-top: -.1rem;
                }
            }
        }
    }
    .ads{
      width:100%;
      height: 2.4rem;
      margin: .2rem 0;
      overflow: hidden;
      img{
        width:100%;
      }
    }
    .content{
      overflow: hidden;
      .title{
        padding: .306667rem .266667rem;
        font-size: .426667rem;
        color: #404040;
        height: .466667rem;
        line-height: .466667rem;
        span{
          margin-left: .2rem;
        }
        a{
          float: right;
          font-size: .346667rem;
          color: #b9b9b9;
        }
        .icon-right:before{
          float: right;
        }
      }
      .title:before{
        content: '|';
        font-size: .38rem;
        background-color: #fd5353;
        color: #fd5353;
        border-radius: .133333rem;
      }
      .joblists{
        background: #fff;
        margin-bottom: .133333rem
      }
      .joblists .lists{
        width:100%;
        overflow: hidden;
        li{
          padding: .266667rem;
          .head{
            width:100%;
            height: .4rem;
            line-height: .4rem;
            margin-bottom: .266667rem;
            h3{
              float: left;
              font-size: .4rem;
              color: #1b1b1b;
              font-weight: unset;
              max-width:80%;
              text-overflow:ellipsis; 
              white-space:nowrap; 
              overflow:hidden; 
            }
            i{
              display: none;
              float: left;
              background: #ff8922;
              text-align: center;
              border-radius: 50%;
              color: #fff;
              font-style: normal;
              width: .4rem;
              height: .4rem;
              font-size: .3rem;
              margin-left: .2rem;
              &.show{
                display: block
              }
            }
            span{
              float: right;
              font-size: .32rem;
              color: #ff6c05
            }
          }
          .desc{
            width:100%;
            font-size: .32rem;
            color: #989898;
            padding-bottom: .08rem;
            overflow: hidden;
            .info{
              float: left;
              span:last-child .vux-1px-r:after{
                border:0
              }
              i{
                margin:0 .133333rem;
              }
            }
            .time{
              float: right;
            }
          }
          .tags{
            width:100%;

            overflow: hidden;
            span{
              font-size: .213333rem;
              color: #7c7c7c;
              padding: .04rem .106667rem;
              margin-right: .08rem;
              background: #efefef;
              border-radius: 5px;
            }
          }
        }
      }
      .job-methods{
        width:100%;
        background: #fff;
        margin-bottom: .133333rem;
        .lists{
          width:100%;
          li{
            position: relative;
            padding: .266667rem;
            border-bottom: 1px dotted #ddd;
            overflow: hidden;
            a{
              display: block;
              float: left;
              font-size: .373333rem;
              color: #686868;
              margin-left: .4rem;
              max-width:75%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            span{
              font-size: .32rem;
              color: #989898;
              float: right;
            }
            &:before{
              content: '.';
              font-size: 1rem;
              color: #999999;
              position: absolute;
              top: -.45rem;
              border-radius: 50%;
            }
          }
        }
      }
      .job-person{
        width:100%;
        background: #fff;
        margin-bottom: .133333rem;
        overflow: hidden;
        .lists{
          width:100%;
          li{
            padding: .2rem .266667rem;
            overflow: hidden;
            .image{
              display: inline-block;
              width:1.333333rem;
              height: 1.333333rem;
              background: url('./images/avatar.png') center no-repeat;
              border-radius: 50%;
              overflow: hidden;
              img{
                width: 1.333333rem;
                height: 1.333333rem;
                border-radius: 50%;
              }
            }
            .info{
              width:7.5rem;
              margin-left: .466667rem;
              display: inline-block;
              vertical-align: top;
              .name{
                display: block;
                font-size: .426667rem;
                color: #433f3d;
                padding: .1rem 0;
              }
              .icon-1:after, .icon-2:after{
                color: #fdc88a;
                margin-left: .173333rem;
              }
              p{
                display: inline-block;
                width:100%;
                font-size: .373333rem;
                color: #686868;
                span{
                  margin-right: .533333rem;
                  &:last-child{
                    float: right;
                    margin: 0;
                  }
                }
                
              }
            }
          }
        }
      }
      .job-zhaoping{
        width:100%;
        padding-bottom: 2rem;
        background: #fff;
        .lists{
          padding: .266667rem;
          width:100%;
          li{
            display: inline-block;
            width:2.666667rem;
            height: .866667rem;
            margin:.133333rem .245rem;
            img{
              width:100%;
            }
          }
        }
      }
    }

}
</style>


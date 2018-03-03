<template>
  <div class="lastjob-wraper">
      <HbHead :headtext = "head"></HbHead>
      <ul class="lists">
          <li class="vux-1px-b" v-for="(item, index) in alljobLists">
            <a href="item.url">
                <div class="image vux-1px">
                    <img :src="item.face" alt="">
                </div>
                <div class="content">
                    <div class="head"><h3>{{item.job}}</h3><i class="item.icon">V</i><span class="salary">{{item.salary}}</span></div>
                    <div class="desc">
                      <div class="info">
                          <span>{{item.province}}<i class="vux-1px-r"></i></span>
                          <span>{{item.city}}<i class="vux-1px-r"></i></span>
                          <span>{{item.experience}}<i class="vux-1px-r"></i></span>
                          <span>{{item.education}}<i class="vux-1px-r"></i></span>
                      </div> 
                      <div class="time">{{item.send_time}}</div>
                    </div>
                    <div class="tags">
                    <span  v-for="item1 in item.tag">{{item1}}</span>
                    </div>
                </div>
            </a>
          </li>
      </ul>
      <infinite-loading @infinite="onInfinite" spinner="circles" ref="infiniteLoading">
            <!-- <span slot="spinner">
                加载中...
            </span> -->
            <span slot="no-more">没有更多消息了</span>
      </infinite-loading>
  </div>
</template>
<script>
import Lib from 'static/js/lib'
import HbHead from 'components/HbHead'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  data () {
      return{
          head: '最新职位',
          alljobLists: [],
          onFetching: false,
          bottomCount: 20,
          aa: true,
          pageCount: 1, //请求第一页的数据
          pageSize: 5 //每页请求8个数据
      }
  },
  components: {
      HbHead,
      InfiniteLoading
  },
  created () {
    let that = this;
  
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
    this.alljobLists.length = 0;
    this.getDate();
  },
  methods: {

   getDate ($state) {
        var self = this;
        Lib.Com.ajax({
        'type': 'POST',
        'url': Lib.apiUrl.recruit_alljob,
        'params': {'pageCount': self.pageCount},
        'success': function(res){
            console.log(res)
            if(res.data.length){
                for(let i in res.data){
                    res.data[i].send_time = Lib.Date.formatterDate2(res.data[i].send_time);
                    res.data[i].tag = (res.data[i].tag).split('\\');
                }
                self.alljobLists = self.alljobLists.concat(res.data);
                //$state.loaded();
                self.$refs.infiniteLoading.stateChanger.loaded()
                self.pageCount++;
            }else{
              //$state.complete();
              self.$refs.infiniteLoading.stateChanger.complete()
            }
           
        }
    })
    },
    onInfinite() {
      if(this.pageCount!=1){  
        this.getDate()
      }
      console.log(this.alljobLists.length)
    },

  }
}
</script>
<style lang="less" scoped>
.lastjob-wraper{
    width:100%;
    overflow: hidden;
    .lists{
        width:100%;
        background: #fff;
        overflow: hidden;
        li{
          padding: .266667rem;
          .image{
              display: inline-block;
              width: 13%;
              height: .866667rem;
              vertical-align: middle;
              overflow: hidden;
              img{
                width:100%;
                height: 100%;
              }
          }
          .content{
            width: 83%;
            display: inline-block;
            vertical-align: middle;
            padding-left: .2rem;
          }
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
}
</style>

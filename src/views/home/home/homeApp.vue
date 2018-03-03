<template>
  <div class="container">
      <header>
        <div class="header">
          <div class="left-logo"><a href="../home/home.html"><img src="" alt=""></a></div>
          <div class="search">
            <div class="search-input" @click="onFocus">请输入关键词 </div>
          </div>
        </div>
      </header>
      <section>
        <!-- banner -->
         <Banner></Banner>
         <!-- 导航 -->
         <nav>
           <div class="nav">
              <div class="nav-item"><a href="../home/information.html?id=88">栏目一</a></div>
              <div class="nav-item"><a href="">栏目二</a></div>
              <div class="nav-item"><a href="">栏目三</a></div>
           </div>
         </nav>
         <!-- 内容区 -->
         <div class="container">
           <!-- <Pullup></Pullup> -->
           <div class="news-lists">
              <div class="news-item vux-1px-b" v-for="(item, key) in lists">
                <div class="image"><a target="_blank" :href="item.url"><img :src="item.pic" alt=""></a></div>
                <div class="text">
                  <h3><a target="_blank" :href="item.url">{{item.title}}</a></h3>
                  <p class="desc">{{item.desc}}</p>
                  <p><span>作者:{{item.author}}</span><span class="time">{{item.date}}</span> </p>
                </div>
                
              </div>
              <infinite-loading @infinite="getDate" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                  暂无结果
                </span>
                <span slot="no-more">
                  暂无数据
                </span>
                <!-- <span slot="spinner">
                  加载中...
                </span> -->
              </infinite-loading>
            </div>

         </div>
      </section>
      <footer>
          <Navbar :iszx="aa"></Navbar>
      </footer>
  </div>
</template>

<script>
import Lib from 'static/js/lib'
import Time from 'static/js/date'
import Banner from 'components/banner'
import Pullup from 'components/pullup'
import Navbar from 'components/Footerbar'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    Banner,
    Pullup,
    Navbar,
    InfiniteLoading
  },
  data () {
    return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20,
        aa: true,
        page_no: 1, //请求第一页的数据
        page_size: 8, //没页请求8个数据
        lists: []
    }
  },
  mounted () {
   
  },
  created() {
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

   },
  methods: {
    onFocus () {
      location.href="../home/search.html"
      console.log('on focus')
    },

    getDate($state) {
      var self = this;
      Lib.Com.ajax({
        'type': 'get',
        'url': Lib.apiUrl.picNews,
        // 'params': {
        //   page: self.lists.length / 20 + 1,
        // },
        'headers':"'Content-Type':application/json;charset=utf-8",
        'success': function(data){
          //console.log(data);
          if (data.lists.length) {
            self.lists = self.lists.concat(data.lists);
            //console.log(self.lists);
            $state.loaded();
            
            if (self.lists.length / 20 === 5) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        }
      })
    },

    // onInfinite() {
    //     this.getDate();
    //     if(this.page_no!=1){  //是因为我在页面初始化时请求了第一页的数据，
    //       this.getDate();
    //     }
    //     console.log(this.page_no)
    // } 
  }
}

</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.clamp(@line: 1) {
    -webkit-line-clamp: @line;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}

.header{
  width:100%;
  height: 1rem;
  background: #ffca00;
  color: #fff;
  .left-logo{
    float: left;
    width:20%;
    height: 1rem;
    text-align: center;
    overflow: hidden;
    a{
        font-size: .4rem;
        color: #fff;
    }
    img{
      width:100%;
      margin-top: .15rem;
    }
  }
  .search{
    float: left;
    width: 80%;
    height: 1rem;
    line-height: .9rem;
    overflow: hidden;
    .search-input{
      width:95%;
      display: inline-block;
      vertical-align: middle;
      height: .8rem;
      line-height: .8rem;
      text-indent: .2rem;
      border:1px solid #fff;
      border-radius: 3px;
      margin-left: .2rem;
    }
  }
}

.nav{
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  display: flex;
  background: #fff;
  overflow: hidden;
  .nav-item{
    flex: 1;
    text-align: center;
    a{
      display: block;
    }
  }
}

.news-lists{
  margin-bottom: 2rem;
  .news-item{
    width:100%;
    overflow: hidden;
    padding: .2rem;
    height: 2rem;
    .image{
      float: left;
    }
    .text{
      float: left;
      h3{
        height: .5rem;
        .clamp(1)
      }
      .desc{
        height: .8rem;
        .clamp(2)
      }
      span{
        display:inline-block;
        vertical-align: middle;
      }
      .time{
        float: right;
      }
    }
  }
}

.num{
  float: left;
  margin-right: .5rem;
  line-height: 1rem;
}
.text{
  float: left;
  overflow: hidden;
}
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

</style>

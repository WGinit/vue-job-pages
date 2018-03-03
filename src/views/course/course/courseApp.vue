<template>
  <div class="course-container">
      <div class="search">
          <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
      </div>
      <div class="tab">
        <tab>
          <tab-item selected><router-link to="/recommend">个性推荐</router-link></tab-item>
          <tab-item ><router-link to="/boutique">精品课</router-link></tab-item>
          <tab-item ><router-link to="/lecture">医美大讲堂</router-link></tab-item>
          <tab-item ><router-link to="/talk">老田说医美</router-link></tab-item>
        </tab>
      </div>

      <div class="container">
          <router-view></router-view>
      </div>

      <footer>
        <Navbar></Navbar>
      </footer>
  </div>
</template>

<script>
import Lib from 'static/js/lib'
import Navbar from 'components/Footerbar'
import { Search, Group, Cell, XButton, Tab, TabItem} from 'vux'

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton,
    Tab,
    TabItem,
    Navbar
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  onItemClick (index) {
      console.log('on item click:', index)
  },

  data () {
    return {
      results: [],
      value: 'test'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.course-container{
  overflow: hidden;
  .search{
    width: 100%;
    overflow: hidden;
    .weui-search-bar{
      padding:.106667rem .2rem;
    }
    .weui-search-bar__box .weui-search-bar__input{
      height: .5rem;
      font-size: .3rem;
    }
    .weui-search-bar__cancel-btn{
      line-height: .6rem
    }
  }
  .tab{
    width:100%;
    overflow: hidden;
    .vux-tab{
      height: 1rem;
      .vux-tab-item{
        font-size: .4rem;
        line-height: 1rem;
        a{
          display: block;
        }
      }
    }
  }
}
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}

</style>



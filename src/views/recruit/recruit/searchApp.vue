<template>
  <div class="recruit-search">
      <HbHead :headtext = "head"></HbHead>
      <div class="content">
              <search
                @result-click="resultClick"
                @on-change="getResult"
                :results="results"
                :auto-fixed="false"
                position="absolute"
                auto-scroll-to-top top="1.133333rem"
                placeholder="输入职位/公司/商区"
                @on-submit="onSubmit"
                ref="search"></search>
          
          <div class="select">
              <!-- 城市选择 -->
               <group>
                <x-address title="地点" v-model="value1" raw-value :list="addressData" hide-district></x-address>
                <input type="hidden" name="adress" :value="getName(value1)">
              
              <!-- 职业选择 -->
                <x-address title="行业" v-model="value2" :list="jobData" @on-shadow-change="onChangeJob"></x-address>
                <input type="hidden" name="job" :value="jobvalue">
              <!-- 职能选择 -->
                <x-address title="职能" v-model="value3" :list="skillData" hide-district @on-shadow-change="onChangeSkill"></x-address>
                <input type="hidden" name="skill" :value="skillvalue">
              </group>
              
          </div>
          <!-- <div class="skill-picker"><picker :data='skillData' v-model='value3' :columns=1 @on-change='change'></picker></div> -->
         <x-button @click.native="submit" type="primary" class="search-btn">搜索</x-button>

         <div class="search-lists">
           <group>
             <div class="head"><cell title="近期搜索记录" value="删除"></cell></div>
             <div class="content vux-1px-t">
                <cell title="地点" value="深圳+医疗/护理/卫生+外科医生" is-link></cell>
                <cell title="地点" value="深圳+医疗/护理/卫生+外科医生" is-link></cell>
                <cell title="地点" value="深圳+医疗/护理/卫生+外科医生" is-link></cell>
             </div>
            </group>
         </div>
         
      </div>
  </div>
</template>
<script>
import Lib from 'static/js/lib'
import HbHead from 'components/HbHead'
import { Search, Group, XAddress,ChinaAddressV4Data, Cell, Picker, XButton, Value2nameFilter as value2name } from 'vux'

export default {
  components: {
    HbHead,
    Search,
    Group,
    XAddress,
    Cell,
    Picker,
    XButton
  },
  data () {
    return {
      head: '职位搜索',
      results: [],
      inputvalue: '',
      value1: ['--', '深圳市'],
      value2: ['医生','护理','卫生'],
      jobvalue:'',
      value3: ['医生','--','--'],
      skillvalue: '',
      addressData: ChinaAddressV4Data,
      jobData:[{
          name: '医生',
          value: '医生',
          parent: 0
        },
        {
          name: '护理',
          value: '护理',
          parent: '医生'
        },
        {
          name: '卫生',
          value: '卫生',
          parent: '护理'
        },
        {
          name: '医生1',
          value: '医生1',
          parent: 0
        },
        {
          name: '护理1',
          value: '护理1',
          parent: '医生1'
        },
        {
          name: '卫生1',
          value: '卫生1',
          parent: '护理1'
        },
        {
          name: '医生2',
          value: '医生2',
          parent: 0
        },
        {
          name: '护理2',
          value: '护理2',
          parent: '医生2'
        },
        {
          name: '卫生2',
          value: '卫生2',
          parent: '护理2'
        },
        ],
      skillData: [{
       name: '医生',
          value: '医生',
          parent: 0
        },
        {
          name: '',
          value: '护理',
          parent: '医生'
        },
        {
          name: '',
          value: '卫生',
          parent: '护理'
        },
        {
          name: '医生1',
          value: '医生1',
          parent: 0
        },
        {
          name: '',
          value: '护理1',
          parent: '医生1'
        },
        {
          name: '',
          value: '卫生1',
          parent: '护理1'
        },
        {
          name: '医生2',
          value: '医生2',
          parent: 0
        },
        {
          name: '',
          value: '护理2',
          parent: '医生2'
        },
        {
          name: '',
          value: '卫生2',
          parent: '护理2'
        },
      ]
    }
  },
  created () {
      //console.log(this.addressData)
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
      this.inputvalue = val;
      this.results = val ? getResult(this.value) : []
    },
     onChangeJob (ids, names) {
      this.jobvalue = names.join(',')
    },
    onChangeSkill (ids, names) {
      this.skillvalue = names.join('')
    },
    // 选择地区
     getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    submit(){
      let self = this;
      Lib.Com.ajax({
        'url': Lib.apiUrl.recruit_jobsearch,
        'type': 'POST',
        'params': {'key': self.inputvalue, 'area': self.getName (self.value1), 'job': self.jobvalue, 'skill': self.skillvalue},
        'success': function(res){
          console.log(res)
        }
      })
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
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

<style lang="less">
.recruit-search{
    width:100%;
    background: #ebebeb;
    overflow: hidden;
    .weui-search-bar{
        height: .8rem;
        margin: .533333rem 0;
        padding: 0 .266667rem;
        background: #ebebeb;
    }
    .weui-search-bar:before, .weui-search-bar:after{
        border:0;
    }
    .weui-search-bar__form{
        height: .8rem;
        background: #ebebeb;
    }
    .weui-search-bar__box .weui-search-bar__input{
        background: #fff;
        font-size: .346667rem;
        height: .8rem;
        padding: 0;
        text-indent: .4rem;
    }
    
    .weui-search-bar__cancel-btn{
        line-height: .8rem;
        color:#fd5353
    }
    .weui-search-bar__box .weui-icon-search, .weui-search-bar__box .weui-icon-clear, .weui-icon-search, .weui-search-bar__label span{
        line-height: .8rem;
        font-size: .4rem;
    }
    .weui-cell{
        font-size: .4rem;
        padding: .266667rem .4rem;
        color: #404040
    }
    .weui-cell_access .weui-cell__ft:after{
        width:15px;
        height: 15px;
    }
    .weui-cell_access .weui-cell__ft{
        padding-right: .4rem;
    }
    .select{
        width:100%;
        overflow: hidden;
        .show{
            display: block;
        }
        .hide{
            display: none
        }
    }
    
    .search-btn{
        width:80%;
        font-size: .4rem;
        background-color: #fd5353;
        margin-top: 1.066667rem;
        margin-bottom: 1.066667rem;
    }
    .search-btn:active{
        background: #fd5353;
        opacity: 0.8;
    }
    .search-lists .head .vux-label{
        color: #ff6c05;
    }
}
.vux-popup-dialog, .vux-picker {
  width:100%;
  .vux-popup-header{
    height: 1rem;
    line-height: 1rem;
    font-size: .35rem;
  }
  .vux-popup-header-right{
    color: #fd5353
  }
  .scroller-component{
    height: 6rem;
  }
  .scroller-indicator{
    height: 1rem;
    top:2.5rem;
  }
  .scroller-mask{
    background-size: 100% 2.5rem;
  }
  .scroller-content{
    top: -.5rem
  }
  .scroller-item{
    height: 1rem;
    line-height: 1rem;
    font-size: .35rem;
  }
}
</style>


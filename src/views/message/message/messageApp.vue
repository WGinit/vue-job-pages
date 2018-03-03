<template>
  <div class="message">
    <div class="top-tab">
        <tab>
            <tab-item selected badge-background="#f00" badge-color="#fff" badge-label="1"><router-link to="/notice">通知</router-link></tab-item>
            <tab-item badge-background="#f00" badge-color="#fff" badge-label="2"><router-link to="/chat">聊天</router-link></tab-item>
            <tab-item badge-background="#f00" badge-color="#fff" badge-label="3" id="last-tab"><router-link to="/job/interflow">职位沟通</router-link></tab-item>
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
import { Tab, TabItem} from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Navbar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.message{
    width:100%;
    overflow: hidden;
    .top-tab{
        .vux-tab{
            height: 1rem;
            .vux-tab-item{
                line-height: 1rem;
                font-size: .4rem;
                .vux-tab-item-badge{
                    font-size: .3rem;
                    height: .5rem;
                    width: .5rem;
                    padding: .15rem;
                    border-radius: 30px;
                    margin: auto 0 auto .5rem;
                    line-height: .2rem;
                }
            }
            #last-tab{
               .vux-tab-item-badge{
                   margin-left: .9rem
               } 
            }
        }
        a{
            display:block;
        }
    }
    .vux-tab .vux-tab-item.vux-tab-selected a{
        color: #04BE02
    }

}
</style>


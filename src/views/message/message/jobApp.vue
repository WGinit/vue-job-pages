<template>
  <div class="job">
    <div class="top-tab">
      <tab>
        <tab-item selected><router-link to="/job/interflow">沟通</router-link></tab-item>
        <tab-item><router-link to="/job/scan">谁看过我</router-link></tab-item>
      </tab>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Lib from 'static/js/lib'
import { Tab, TabItem} from 'vux'

export default {
    components: {
    Tab,
    TabItem
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
</style>




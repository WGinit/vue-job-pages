<template>
       <!-- 登录 -->
      <div class="login" v-show="isLogin" v-model="loginSign">
          <h1>会员登录</h1>
        <button-tab v-model="loginChose">
            <button-tab-item selected @on-item-click="choseLogin()">手机验证码登录</button-tab-item>
            <button-tab-item @on-item-click="choseLogin()">账号密码登录</button-tab-item>
        </button-tab>
        <!-- 验证码登录 -->
        <div class="login-code" v-model="loginChose" v-show="loginCode">
          <group>
            <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="phone" :max="11" class="weui-vcode">
                <x-button slot="right" type="primary" mini @click.native="send" :disabled="sendcode" :max="6">
                    <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
                    <span v-if="!sendMsgDisabled">发送验证码</span>
                </x-button>
            </x-input>
            <x-input name="code" placeholder="请输入验证码" type="text" v-model="code"></x-input>
          </group>
          <toast v-model="tips">quxiao</toast>
          <x-button :gradients="['#FF2719', '#FF61AD']"  @click.native="login">登录</x-button>
        </div>
        <!-- 账号密码登录 -->
        <div class="login-pass" v-model="loginChose" v-show="loginPwd">
          <group>
            <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="phone" :max="11"></x-input>
            <x-input name="passward" placeholder="请输入密码" :type="pwdType" v-model="pwd">
                <span slot="right" @click="changeType">显示密码</span>
            </x-input>
          </group>
          <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="login">登录</x-button>
        </div>
        <div class="tosign changesl" @click="toSign">还没账号？立即注册</div>  
      </div>
    
 
</template>
<script>
import Lib from 'static/js/lib';
import Ver from 'static/js/verification'

import { XInput, XButton, Group, ButtonTab,ButtonTabItem, Toast } from 'vux';
export default {
  components: {
      XInput,
      XButton,
      Group,
      ButtonTab,
      ButtonTabItem,
      Toast
  },
  data(){
      return{
        name:'',
        paw:''
    }
  },
  methods:{
      login(){
        var self = this;
        
        // this.$vux.loading.show({
 		// 	text: 'Loading'
		// });
        Lib.M.ajax({
            
            'data': {name: this.name, pass: this.paw},
            'url':'/listpicnews',
            'success':function (data){
                console.log(data);
            }
        })
      }
    },
   mounted(){

    }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';


</style>
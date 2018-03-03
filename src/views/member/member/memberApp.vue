<template>
  <div class="member">
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
            <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="phone1" :max="11" class="weui-vcode">
                <x-button slot="right" type="primary" mini @click.native="send" :disabled="sendcode" :max="6">
                    <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
                    <span v-if="!sendMsgDisabled">发送验证码</span>
                </x-button>
            </x-input>
            <x-input name="code" placeholder="请输入验证码" type="text" v-model="code1"></x-input>
          </group>
          <toast v-model="tips">quxiao</toast>
          <x-button :gradients="['#FF2719', '#FF61AD']"  @click.native="login">登录</x-button>
        </div>
        <!-- 账号密码登录 -->
        <div class="login-pass" v-model="loginChose" v-show="loginPwd">
          <group>
            <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="phone2" :max="11"></x-input>
            <x-input name="passward" placeholder="请输入密码" :type="pwdType" v-model="pwd1">
                <span slot="right" @click="changeType">显示密码</span>
            </x-input>
          </group>
          <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="login">登录</x-button>
        </div>
        <div class="tosign changesl" @click="toSign">还没账号？立即注册</div>  
      </div>
      
      <!-- 注册 -->
      <div class="sign" v-show="isSign" v-model="loginSign">
          <div class="sign-pass">
              <h1>用户注册</h1>
                <group>
                    <x-input name="mobile" placeholder="请输入手机号码" keyboard="number"  v-model="phone3" :max="11">
                        <x-button slot="right" type="primary" mini @click.native="send" :disabled="sendcode" :max="6">
                            <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
                            <span v-if="!sendMsgDisabled">发送验证码</span>
                        </x-button>
                    </x-input>
                    <x-input name="code" placeholder="请输入验证码" type="text" v-model="code2"></x-input>
                    <x-input name="passward" placeholder="请输入密码" :type="pwdType" v-model="pwd2">
                        <span slot="right" @click="changeType" :class="{ 'off': isOff, 'open': isOn}">显示密码</span>
                    </x-input>
                </group>
                <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="register">注册</x-button>
          </div>
        <div class="tologin changesl" @click="toLogin">已有账号？立即登录</div>  
      </div>

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
        isLogin: false,
        isSign: true,
        loginCode: true,
        loginPwd: false,
        loginSign:0,
        sendMsgDisabled: false,
        sendcode: false,
        loginChose: 0,
        phone1:'',
        phone2:'',
        phone3:'',
        pwd1:'',
        pwd2:'',
        code1: '',
        code2:'',
        tips: false,
        pwdType: 'password',
        isOff: true,
        isOn: false,
        time: 60 // 发送验证码倒计时
    }
  },
    mounted(){
        if(localStorage.getItem('token')){
            location.href = '/member.html';
        }
    },

    methods:{
        toSign() {
            this.isLogin = false;
            this.isSign = true;
        },
        toLogin() {
            this.isLogin = true;
            this.isSign = false;
        },
        // 切换登录方式
        choseLogin () {
            this.loginCode = !this.loginCode;
            this.loginPwd = !this.loginPwd;
        },
        // 显示密码
        changeType(){
            this.pwdType = this.pwdType==='password'?'text':'password';
            this.isOff = !this.isOff;
            this.isOn = !this.isOn;
        },
        // 发送验证码
        send() {
            let me = this;
            // 登录验证码
            if(me.isLogin){
                if(me.phone1 == ''){
                    me.$vux.toast.show('请输入手机号','text','bottom');
                }else if(!(Ver.checkPhone(me.phone1))){
                    me.$vux.toast.show('手机号格式错误')
                }
                else{
                Lib.M.ajax({
                    'type':'post',
                    'url': Lib.apiUrl.getCode,
                    'data':me.phone1,
                    'success': function(res){
                        console.log('验证码是:'+res);
                        me.sendcode = true;
                        me.sendMsgDisabled = true;
                        let interval = window.setInterval(function() {
                            if ((me.time--) <= 0) {
                                me.time = 60;
                                me.sendcode = false;
                                me.sendMsgDisabled = false;
                                window.clearInterval(interval);
                            }
                        }, 1000);
                    }
                })
              }
            }
            //注册验证码
            else{
                console.log('注册');
                if(me.phone3 == ''){
                me.$vux.toast.show('请输入手机号','text','bottom');
                }else if(!(Ver.checkPhone(me.phone3))){
                    me.$vux.toast.show('手机号格式错误')
                }
                else{ 
                    Lib.M.ajax({
                    'type':'post',
                    'url': Lib.apiUrl.getCode,
                    'data':me.phone3,
                    'success': function(res){
                        console.log('验证码是:'+res);
                        me.sendcode = true;
                        me.sendMsgDisabled = true;
                        let interval = window.setInterval(function() {
                            if ((me.time--) <= 0) {
                                me.time = 60;
                                me.sendcode = false;
                                me.sendMsgDisabled = false;
                                window.clearInterval(interval);
                            }
                        }, 1000);
                    }
                  })
                }
            }
            
        },
        // 登录提交
        login(){
            var self = this;

            var data1 = {'mobile':self.phone1,'code':self.code1};
            var data2 = {'mobile':self.phone2, 'pwd': self.pwd1};
            // 验证码登录
            if(self.loginCode){
            if(self.phone1 == "" || self.code1 == ""){
                self.$vux.toast.show({
                    type: 'warn',
                    text: '请输入手机号或验证码',
                    time: '1500'
                })
            }else if(!(Ver.checkPhone(self.phone1))){
                self.$vux.toast.show('手机号格式错误');
            }else{
                 Lib.M.ajax({
                'type': 'post',
                'url':'http://127.0.0.1/m-ymsj2/dist/static/data/loginCode.php',
                'data': data1,
                'success': function(res){
                    console.log(res)
                    if(res.errno1 == 1){
                        self.$vux.toast.show('验证码错误')
                    }else{
                        self.$vux.toast.show('登录成功');
                        localStorage.setItem('assion_token', res.token);
                        window.history.back(-1);
                    }
                  }
               })
            }
        }
            // 密码登录
            else{
              if(self.phone2 == "" || self.pwd1 == ""){
              self.$vux.toast.show({
                type: 'warn',
                text: '请输入手机号或密码',
                time: '1500'
              })
              }else if(!(Ver.checkPhone(self.phone2))){
                self.$vux.toast.show('手机号格式错误');
              }else{
                Lib.M.ajax({
                'type': 'post',
                'url':'http://127.0.0.1/m-ymsj2/dist/static/data/loginPwd.php',
                'data': data2,
                'success': function(res){
                    console.log(res)
                    if(res.errno1 == 1){
                        self.$vux.toast.show('手机号未注册')
                    }else if(res.errno2 == 2){
                       self.$vux.toast.show('密码错误')
                    }else{
                        self.$vux.toast.show('登录成功');
                        localStorage.setItem('assion_token', res.token);
                        window.history.back(-1);
                    }
                  }
               })
            }
     
           
          }
        },

        // 会员注册
        register() {
            var self = this;
            if(self.phone3 == "" || self.code2 == "" || self.pwd2 == ""){
                self.$vux.toast.show({
                    type: 'warn',
                    text: '请输入手机号或验证码',
                    time: '1500'
                })
            }else if(!(Ver.checkPhone(self.phone3))){
                self.$vux.toast.show('手机号格式错误');
            }else{

            var data = {'mobile':self.phone3,'code':self.code2,'pwd': self.pwd2};
            Lib.M.ajax({
                'type': 'post',
                'url':'http://127.0.0.1/m-ymsj2/dist/static/data/Sign.php',
                'data': data,
                'success': function(res){
                    console.log(res)
                    if(res.errno1 == 1){
                       self.$vux.toast.show('手机号已注册')
                    }else if(res.errno2 == 2){
                       self.$vux.toast.show('验证码错误')
                    }else{
                        self.$vux.toast.show('注册成功');
                        localStorage.setItem('assion_token', res.token);
                        window.history.back(-1);
                    }
                }
            })

            }
        }
    },
 
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.member{
    h1{
        text-align: center;
        padding: 10px 20px;
    }
    .changesl{
        padding: 20px;
    }
    .login-pass, .sign-pass{
        .off{
            color: green;
        }
        .open{
            color: #f00;
        }
    }
}

</style>

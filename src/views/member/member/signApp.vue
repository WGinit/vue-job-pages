<template>
   <!-- 注册 -->
      <div class="sign" v-show="isSign" v-model="loginSign">
          <div class="sign-pass">
              <h1>用户注册</h1>
                <group>
                    <x-input name="mobile" placeholder="请输入手机号码" keyboard="number"  v-model="phone" :max="11">
                        <x-button slot="right" type="primary" mini @click.native="send" :disabled="sendcode" :max="6">
                            <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
                            <span v-if="!sendMsgDisabled">发送验证码</span>
                        </x-button>
                    </x-input>
                    <x-input name="code" placeholder="请输入验证码" type="text" v-model="code"></x-input>
                    <x-input name="passward" placeholder="请输入密码" :type="pwdType" v-model="pwd">
                        <span slot="right" @click="changeType">显示密码</span>
                    </x-input>
                </group>
                <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="register">注册</x-button>
          </div>
        <div class="tologin changesl" @click="toLogin">已有账号？立即登录</div>  
      </div>
      
</template>

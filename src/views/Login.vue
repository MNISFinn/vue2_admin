<template>
  <div class="login-box">
    <div class="login-module">
      <div class="title">
        admin-permission
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>密码登录</span>
        </div>
        <div class="login-form">
          <el-form :model="loginForm"  :rules="rules" ref="loginForm">
          <el-form-item prop="account">
            <el-input placeholder="账号" v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码" @keyup.enter.native="loginSubmit('loginForm')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="loginSubmit('loginForm')">登录</el-button>
          </el-form-item>
<!--          <p class="smalltxt">-->
<!--            <router-link class="a" to="#">忘记密码</router-link>-->
<!--            <router-link class="a" to="#">忘记会员名</router-link>-->
<!--            <router-link class="a" to="#">免费注册</router-link>-->
<!--          </p>-->
        </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

  import {login} from "../api";

  export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号',  trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码',  trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
  async loginSubmit(formName) {
    let data = await login(this.loginForm.account);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //网络请求
          let token = data.token
          // 本地 vuex
          this.$store.commit('LOGIN_IN', token)
          console.log(data)
          this.$router.replace('/').catch(() =>{})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .login-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #2d3a4b;
  }
  .login-module {
    display: flex;
    flex-direction: row;
  }
  .title {
    color: white;
    font-size: 36px;
    text-align: center;
    width: 600px;
    padding-top: 100px;
  }
  .login-form {
    //background-color: white;
    width: 300px;
  }

  .el-input {
    width: 300px;
  }

  .login-btn {
    width: 300px;
  }

  .smalltxt {
    text-align: right;
    .a {
      text-decoration: none;
      color: #999999;
      font-size: 12px;
      margin-left: 8px;
    }
  }
</style>

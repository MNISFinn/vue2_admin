<template>
  <div class="login-box">
    <div class="login-module">
      <div class="title">
        GoldMax
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>密码登录</span>
        </div>
        <div class="login-form">
          <el-form>
          <el-form-item>
            <el-input placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="loginSubmit()">登录</el-button>
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
export default {
  name: "Login",
  data() {
    return {

    }
  },
  methods: {
    loginSubmit() {
      this.$router.push('/index')
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
    width: 380px;
  }

  .el-input {
    width: 380px;
  }

  .login-btn {
    width: 380px;
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
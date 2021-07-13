<template>
  <el-header style="text-align: right; font-size: 12px;width: 100%">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
    <span @click="logout">
      <el-icon class="el-icon-coordinate"/>
    </span>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.commit('LOGIN_OUT')
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
//background-color: #2d3a4b;
  color: #333;
  line-height: 60px;
}
</style>
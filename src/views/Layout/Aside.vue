<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-active="$route.name">
      <DynamicMenu :menu-list="sidebarMenu"></DynamicMenu>
    </el-menu>
  </el-aside>
</template>

<script>
import DynamicMenu from "./DynamicMenu";
import {mapState} from 'vuex'

export default {
  name: "Aside",
  components: {DynamicMenu},
  computed: {
    ...mapState(['isSidebarNavCollapse']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.el-aside {
  color: #333;
}
</style>

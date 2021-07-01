<template>
  <el-container>
    <Aside></Aside>
    <el-container>
      <Header></Header>
      <el-main>
        <transition name="main" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>

</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Layout",
  components: {Footer, Header, Aside}
}
</script>

<style scoped>

</style>
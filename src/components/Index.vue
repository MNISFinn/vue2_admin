<template>

</template>

<script>
import Aside from "@/views/Layout/Aside";
import Header from "@/views/Layout/Header";
import Footer from "@/views/Layout/Footer";
export default {
  name: "Index",
  components: {Aside, Header, Footer},
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style lang="less" scoped>



</style>
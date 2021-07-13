<template>
    <div class="menu-container">
        <template v-for="v in menuList">
            <el-submenu :index="v.name" v-if="v.children && v.children.length > 0" :key="v.name">
                <template slot="title">
                    <span>{{v.meta.name}}</span>
                </template>
                <el-menu-item-group>
                    <DynamicMenu :menuList="v.children"></DynamicMenu>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name)" v-else>
                <span slot="title">{{v.meta.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "DynamicMenu",
        props: {
            menuList: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
            gotoRoute(name) {
              let path = this.$route.path;
              path = path.substr(1);
              let path_name = path.replace(path[0],path[0].toUpperCase());
              if (path_name !== name) {
                this.$router.push({name})
              }
            }
        }
    }
</script>

<style scoped>

</style>

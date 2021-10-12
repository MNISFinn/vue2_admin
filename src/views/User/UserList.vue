<template>
    <div>
        <div class="search-area">
            <el-input class="search-input"></el-input>
            <el-button type="primary" class="search-button">搜索</el-button>
        </div>
        <el-table :data="tableData">
            <el-table-column prop="user_id" label="ID">
            </el-table-column>
            <el-table-column prop="user_name" label="用户名">
            </el-table-column>
            <el-table-column prop="wechat_name" label="微信昵称">
            </el-table-column>
            <el-table-column prop="wechat_open_id" label="微信openid">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
            <el-table-column prop="mobile" label="手机号">
            </el-table-column>
            <el-table-column prop="true_name" label="真实姓名">
            </el-table-column>
            <el-table-column prop="community" label="所在小区">
            </el-table-column>
            <el-table-column label="注册时间" width="150px">
                <template slot-scope="scope">
                    {{formatTime(scope.row.register_time)}}
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                class="user-pagination"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="current_page"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="page_size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
        >
        </el-pagination>
    </div>

</template>

<script>
    import axios from '@/utils/http';
    import {formatTime} from '@/utils/common';

    export default {
        name: "UserList",
        data() {
            return {
                tableData: [],
                total:0,
                current_page: 1,
                page_size: 10,

            }
        },
        mounted() {
            let params = {'page_size':this.page_size, 'page_num':this.current_page}
            axios.post('/api/user_list', params).then((res) => {
                this.tableData = res.data
                this.total=res.total
            })
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                let params = {'page_size':val, 'page_num':this.current_page}
                axios.post('/api/user_list', params).then((res) => {
                    this.tableData = res.data
                    this.total=res.total
                    this.page_size = val
                })
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                let params = {'page_size':this.page_size, 'page_num':val}
                axios.post('/api/user_list', params).then((res) => {
                    this.tableData = res.data
                    this.total=res.total
                    this.current_page = val
                })
            },
            formatTime(timestamp) {
                return formatTime(new Date(timestamp * 1000))
            }
        }
    }
</script>

<style scoped>
    .search-area {
        text-align: right;
    }
    .search-input {
        width: 150px;
    }
    .search-button {
        margin-left: 5px;
    }
    .user-pagination {
        text-align: right;
        margin-top: 10px;
    }
</style>

<template>
    <div>
        <div class="search-area">
            <el-input class="search-input"></el-input>
            <el-button type="primary" class="search-button">搜索</el-button>
        </div>
        <el-table :data="tableData">
            <el-table-column prop="id" label="ID">
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

    export default {
        name: "CommunityList",
        data() {
            return {
                tableData: [],
                total: 0,
                current_page: 1,
                page_size: 10,

            }
        },
        mounted() {

        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页  条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: `);
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

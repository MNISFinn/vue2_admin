<template>
    <el-dialog
            :visible.sync="visible"
            :before-close="handleClose"
            :close-on-click-modal="false"
    >
        <el-form :model="addForm" refs="addForm">
            <el-form-item label="城市：">
                <el-cascader
                        v-model="districts_value"
                        :options="districts_options"
                        @change="handleChange"></el-cascader>
            </el-form-item>
            <el-form-item label="搜索小区：">
                <el-select
                        v-model="communities"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        placeholder="请输入关键词"
                        :remote-method="remoteMethod"
                        :loading="loading"
                >
                    <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submitForm">添加</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import districts from "../../assets/china_districts"
    import axios from "../../utils/http";

    export default {
        name: "addCommunities",
        props: {
            visible: {
                type: Boolean,
                value: false
            }
        },
        data() {
            return {
                options: [],
                communities: [],
                list: [],
                loading: false,
                addForm: {
                    communities: []
                },
                districts_value: [],
                districts_options: [],
            }
        },
        mounted() {
            this.districts_options = districts
        },
        methods: {
            /**
             * 关闭对话框
             */
            handleClose() {
                this.$emit("update:visible", !this.visible);
            },
            remoteMethod(query) {
                let _that = this
                let region = _that.districts_value != undefined ? _that.districts_value[1] : ''
                if (query !== '') {
                    this.loading = true;
                    console.log(query)
                    let param = {
                        keyword: query,
                        region,
                        page_index: 1
                    }
                    axios.post('/query_communities', param).then(res => {
                        _that.loading = false
                        console.log(res)
                        res.forEach(function (v) {
                            _that.options.push({
                                'label': v.title,
                                'id': v.id,
                                'value': JSON.stringify(v)
                            })
                        })
                    })
                } else {
                    this.options = [];
                }
            },
            submitForm() {
                // console.log(this.communities)
                let list = [];
                this.communities.forEach(value => {
                    let item = JSON.parse(value)
                    console.log(item)
                    list.push({id: item.id, title: item.title, address: item.address, location: item.location})
                })

                let param = {
                    communities: list,
                    province: this.districts_value[0],
                    city: this.districts_value[1],
                }
                axios.post('/add_communities', param).then(res => {
                    this.handleClose()
                })
            },
            handleChange(value) {
                console.log(value)
            }
        }
    }
</script>

<style scoped>

</style>

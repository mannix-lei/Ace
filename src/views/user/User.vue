<template>
    <div>
        <div class="search-line">
            <el-form :model="query" :rules="queryRules" ref="query" label-width="50px">
                <el-form-item
                    label="姓名"
                    prop="name"
                >
                    <el-input type="text" v-model="query.name" :maxlength="50" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="邮箱"
                    prop="email"
                >
                    <el-input type="text" v-model="query.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="电话"
                    prop="mobile"
                >
                    <el-input type="text" v-model="query.mobile" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search('query')">搜索</el-button>
                    <el-button @click="addUser">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="userList" style="width: 100%">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="mobile" label="联系方式"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="editUser(scope.row.id)" type="text" size="small">编辑</el-button>
                    <el-button type="text" @click="delUser(scope.row.id)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="footer-pagi">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="query.pageNo"
                :page-sizes="[5, 10, 20]"
                :page-size="query.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalRows">
        </el-pagination>
        </div>
    </div>
</template>
<script lang="ts" src="./User.ts"></script>
<style scoped lang="less" src="./User.less"></style>
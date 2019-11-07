<template>
    <div>
        <el-table :data="userList" style="width: 100%">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="mobile" label="电话"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        </el-table>
        <el-button @click="addUser">添加</el-button>
    </div>
</template>
<script lang="ts" src="./User.ts"></script>
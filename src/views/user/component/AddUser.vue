<template>
    <div>
        <el-form :model="userForm" status-icon :rules="userRules" ref="userForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="userForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password">
                <el-input type="text" v-model="userForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="mobile">
                <el-input v-model="userForm.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="userForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
                <el-button @click="resetForm('userForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" src="./AddUser.ts"></script>
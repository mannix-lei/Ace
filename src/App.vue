<template>
    <div id="app">
        <el-container class="home-body">
            <el-aside width="200px">
                <el-menu
                    default-active="/"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                >
                    <el-menu-item index="/">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="user">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="doc">
                        <i class="el-icon-document"></i>
                        <span slot="title">文章管理</span>
                    </el-menu-item>
                    <el-menu-item index="about">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="home-content">
                <el-header>
                    <el-button type="text" @click="back">
                        <i class="el-icon-back"></i>返回
                    </el-button>
                    <div class="userInfo">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <el-avatar :size="50" :src="circleUrl"></el-avatar>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class App extends Vue {
    public circleUrl: string =
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
    public back() {
        history.go(-1);
    }
}
</script>

<style lang="less">
.home-body {
    display: flex;
}

.home-content .el-header {
    background: #b3c0d1;
    font-size: 30px;
}
.home-content .el-header .el-button--text {
    color: #fff;
}
.home-body .el-aside {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(84, 92, 100);
    bottom: 0;
}

.home-body .el-container {
    position: absolute;
    left: 200px;
    right: 0;
    top: 0px;
    bottom: 0px;
}

.home-body .el-menu {
    border-right: none;
}

.userInfo {
    position: absolute;
    right: 50px;
    top: 0px;
}

.userInfo .el-avatar--circle {
    margin-top: 5px;
}

.userInfo:hover {
    cursor: pointer;
}
</style>

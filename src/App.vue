<template>
    <div id="app">
        <el-container class="home-body">
            <el-aside>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                >
                    <el-menu-item index="/">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="user">
                        <i class="el-icon-menu"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="paper">
                        <i class="el-icon-document"></i>
                        <span slot="title">文章管理</span>
                    </el-menu-item>
                    <el-menu-item index="about">
                        <i class="el-icon-setting"></i>
                        <span slot="title">发票管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="home-content">
                <el-header>Ace</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class App extends Vue {}
</script>

<style lang="less">
.home-body {
    display: flex;
}

.home-content .el-header {
    background: #b3c0d1;
    font-size: 30px;
    line-height: 2;
}
</style>

<template>
    <div class="body">
        <el-card>
            <draggable class="list-group" :list="fooList" group="people" @change="log">
                <div 
                    class="list-group-item" 
                    v-for="(item, index) in fooList" 
                    :key="index">
                    id: {{ item.id }}
                    name: {{ item.name }}
                </div>
            </draggable>
        </el-card>
        <el-card>
            <draggable class="list-group" :list="barList" group="people" @change="log">
                <div 
                    class="list-group-item" 
                    v-for="(item, index) in barList" 
                    :key="index">
                    id: {{ item.id }}
                    name: {{ item.name }}
                </div>
            </draggable>
        </el-card>
    </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="less" src="./Home.less"></style>
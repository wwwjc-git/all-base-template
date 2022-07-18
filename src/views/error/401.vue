<script setup lang="ts">
import { useRouter } from 'vue-router'

const route = useRouter()

const back = () => {
  route.go(-1)
}
</script>

<template>
  <div class="err-page-container">
    <el-button class="pan-back-btn" @click="back">
      <el-icon color="#FFF" class="no-inherit">
        <i-ep-arrow-left />
      </el-icon>
      <span>返回</span>
    </el-button>
    <h1 class="text-jumbo text-ginormous">Oops!</h1>
    <h2>你没有权限去该页面</h2>
    <ul class="list-unstyled">
      <li>或者你可以去: <router-link to="/home">回首页</router-link></li>
    </ul>
    <img src="../../assets/401_images/401.gif" alt="Girl has dropped her ice cream.">
  </div>
</template>

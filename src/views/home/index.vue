<script setup lang="ts">
import { Action } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import echarts from '@/echarts/index'
import { useUserStore } from '@/pinia/user'
import { SyLeftRelated, SyCenterRelated, SyRightRelated } from '@/components'

const userStore = useUserStore()

const loading = ref(true)
const res = await userStore.getUserInfo() as GetUserInfoRes

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }
]

const open = () => {
  ElMessageBox.alert('box', '标题', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`
      })
    }
  })
}

onMounted(() => {
  const chartDom = document.querySelector('#echarts-container') as HTMLElement
  const charts = echarts.init(chartDom)
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  }
  charts.setOption(option)
})

const changeNameHandler = () => {
  userStore.name = '1234'
}
</script>

<template>
  <div class="home-page">home page</div>
  <el-button>按钮</el-button>
  <el-button text @click="open">Message Box</el-button>

  <el-icon color="#409EFC" style="font-size: 160px;" class="no-inherit">
    <i-ep-share />
  </el-icon>
  <el-icon color="#409EFC" style="font-size: 160px;" class="no-inherit">
    <i-ep-open />
  </el-icon>
  <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <div id="echarts-container" style="width: 300px; height: 300px;" />
  <sy-left-related />
  <sy-center-related />
  <sy-right-related />
  <p @click="changeNameHandler">{{ userStore.name }}</p>
  <p>{{ userStore.getName }}</p>
  <br>
  <p>接口返回数据：{{res.name}}</p>
</template>

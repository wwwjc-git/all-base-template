<template>
  <div class="home-container-wrap">
    <div class="svg-wrap">
      <p class="label">
        svg使用示例：
        <svg-icon
          slot="prefix"
          :icon-class="'404'"
        />
      </p>
    </div>
    <div id="echarts-container" />
    <br>
    <p class="title">三种字体：阿里巴巴普惠体- regular- bold 数字DIN字体</p>
    <ul class="ff-list">
      <li>阿里巴巴普惠体 - 正常</li>
      <li>阿里巴巴普惠体 - 加粗</li>
      <li>DIN数字 - 1234567890</li>
    </ul>
    <br>
    <p class="title">系统颜色</p>
    <ul class="c-list">
      <li v-for="item in 5" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">状态颜色</p>
    <ul class="sc-list">
      <li v-for="item in 5" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">文字颜色</p>
    <ul class="fc-list">
      <li v-for="item in 5" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">边框颜色</p>
    <ul class="bc-list">
      <li v-for="item in 2" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">字体大小</p>
    <ul class="fz-list">
      <li v-for="item in 7" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">横向渐变色</p>
    <ul class="r-lc-list">
      <li v-for="item in 6" :key="item">{{ item }}</li>
    </ul>
    <br>
    <p class="title">纵向渐变色</p>
    <ul class="c-lc-list">
      <li v-for="item in 6" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    this.$nextTick(() => {
      const charts = this.$echarts.init(document.querySelector('#echarts-container'))
      charts.setOption({
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
      })
    })
  }
}
</script>

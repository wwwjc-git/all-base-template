<template>
  <div class="app-wrapper">
    <top-bar />
    <app-main />
    <footer-bar />
  </div>
</template>

<script>
import { AppMain, TopBar, FooterBar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    TopBar,
    FooterBar
  }
}
</script>

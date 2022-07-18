<script setup lang="ts"></script>

<template>
  <suspense>
    <section class="app-main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </section>
  </suspense>
</template>

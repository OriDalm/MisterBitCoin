<script>
import { RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  min-height: 95vh;
}
</style>

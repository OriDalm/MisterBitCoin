<template>
  <header class="app-header">
    <h1>MisterBitCoin</h1>

    <nav><RouterLink to="/">Home</RouterLink> | <RouterLink to="/contact">Contacts</RouterLink></nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;

  padding: 10px;
  background-color: lightblue;

  a {
    text-decoration: none;
  }
  .router-link-exact-active {
    color: white;
  }
}
</style>

<template>
  <div class="home-container">
    <div class="home">
      <h1>Welcome {{ user?.name }}</h1>
      <p>Bitcoin Rate: {{ rate }}</p>
      <p>Balance: {{ user?.balance }}</p>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service'

export default {
  data() {
    return {
      rate: null,
      user: null,
    }
  },
  async created() {
    try {
      const response = await bitcoinService.getRate()
      this.rate = response
    } catch (error) {
      console.error('Error fetching Bitcoin rate:', error)
    }

    const user = userService.getUser()
    this.user = user
  },
}
</script>

<style scoped>
.home-container {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home {
  border: 1px solid black;
}
</style>

<template>
  <div>
    404<br>
    <button @click="goToHome">home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
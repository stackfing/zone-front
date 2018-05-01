<template>
  
</template>

<script>
export default {
  data() {
      return {

      }
  },
  created() {
      localStorage.removeItem("jwts")
      this.$router.push('login')
  }
}
</script>

<style scoped>

</style>

<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
      return {
      }
  },
  mounted() {
      this.$http.get('http://localhost:8888/api/user/detail/' + this.$route.params.nickname).then(res=> {
          console.log(res.body.data);
      })
  }
}
</script>

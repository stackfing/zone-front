<template>
<div class="container">
  <scroller style="top: 44px"
      :on-refresh="refresh"
      :on-infinite="infinite">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
</div>
</template>
<style>
</style>
<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
  export default {
    data() {
      return {
        items: []
      }
    },
    
    mounted() {
    	for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      refresh (done) {
        setTimeout(() => {
          var start = this.top - 1
          for (var i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10
          done()
        }, 1500)
      },
      infinite (done) {
        setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
      }
    }
  }
</script>
<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },

  data () {
    return {
    }
  },

  created () {
    this.$store.dispatch('Dimension/serviceTest', {
      data: 1
    }).then(data => {
      console.log(data, 'eeee')
    })
  }
}
</script>

<style lang="less" scoped>
.chart-style {
  width: 400px;
  height: 300px;
  float: left;
}
</style>

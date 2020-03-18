<template>
  <div class="level-ctrl">
    <div shadow="hover" v-for="chart in allChartList" :key="chart.id" @click="clickLevel(chart)">
      {{chart.name}}{{chart.zIndex}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LevelCtrl',
  computed: mapState({
    allChartList: 'allChartList'
  }),
  methods: {
    clickLevel (chart) {
      console.log(111)
      this.$store.commit('setCurEdit', chart)
    }
  }
}
</script>

<style lang="less" scoped>
.level-ctrl {
  width: 100%;
}
</style>

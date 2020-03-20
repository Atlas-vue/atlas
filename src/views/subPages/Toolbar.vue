<template>
  <div class="toolbar">
    <el-button @click="addChart(chart)" v-for="chart in chartList" :key="chart.name">{{chart.name}}</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { v4 as uuid } from 'uuid'
import chartList from '@/data/chart-list.js'
export default {
  name: 'Toolbar',
  data () {
    return {
      chartList
    }
  },
  computed: mapState({
    allChartList: 'allChartList'
  }),
  methods: {
    addChart (chart) {
      const id = `chart-${uuid().split('-').pop()}`
      const opt = Object.assign({}, chart, { id })
      opt.basic.zIndex = this.allChartList.length + 51
      this.$store.commit('addChart', opt)
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar {

}
</style>

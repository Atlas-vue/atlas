<template>
  <div class="toolbar">
    <el-button @click="addChart">增加表格</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { v4 as uuid } from 'uuid'
export default {
  name: 'Toolbar',
  data () {
    return {
      opt: {
        name: '图表',
        x: 0,
        y: 0,
        width: 100,
        height: 100
      }
    }
  },
  computed: mapState({
    allChartList: 'allChartList'
  }),
  methods: {
    addChart () {
      const id = `chart-${uuid().split('-').pop()}`
      const zIndex = this.allChartList.length + 51
      const opt = Object.assign({}, this.opt, { id, zIndex })
      this.$store.commit('addChart', opt)
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar {

}
</style>

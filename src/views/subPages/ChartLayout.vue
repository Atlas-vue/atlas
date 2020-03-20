<template>
  <div class="chart-layout">
    <div class="atlas-canvas">
      <vue-draggable-resizable
        v-for="({id, name, type, basic, props}) in allChartList"
        :id="id"
        :key="id"
        class-name="atlas-chart"
        class-name-draggable="my-handle-class"
        :w="basic.width"
        :h="basic.height"
        :x="basic.x"
        :y="basic.y"
        :z="basic.zIndex"
        @dragging="onDrag"
        @resizing="onResize"
        @activated="onClick(id)"
        :parent="true"
      >
        <!-- <div :class="{'border': curChart.id === id}"></div> -->
        <component v-bind:is="components[type]" :options="props"></component>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import resize from '@/utils/resize-window'
import components from '@/components'
export default {
  name: 'ChartLayout',
  computed: mapState({
    allChartList: 'allChartList',
    curChart: 'curEdit'
  }),
  data () {
    return {
      components
    }
  },
  mounted () {
    this.initResize()
  },
  methods: {
    initResize () {
      const chartLayout = document.querySelector('.chart-layout')
      const atlasCanvas = document.querySelector('.atlas-canvas')
      atlasCanvas.style.width = '1920px'
      atlasCanvas.style.height = '1080px'
      resize(atlasCanvas, chartLayout)
    },
    onDrag (x, y) {
      this.curChart.basic.x = x
      this.curChart.basic.y = y
      this.$store.commit('setCurEdit', this.curChart)
    },
    onResize (x, y, w, h) {
      this.curChart.basic.x = x
      this.curChart.basic.y = y
      this.curChart.basic.width = w
      this.curChart.basic.height = h
      this.$store.commit('setCurEdit', this.curChart)
    },
    onClick (item) {
      const curChart = this.allChartList.find(({ id }) => id === item)
      this.$store.commit('setCurEdit', curChart)
    }
  }
}
</script>

<style lang="less" scoped>
.chart-layout {
  position: relative;
  width: 100%;
  overflow: auto;
  .my-handle-class {
    position: absolute;
    color: #fff;
    background: black;
  }
  .atlas-canvas {
    position: relative;
    background-color: bisque;
    user-select: none;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    border: 1px solid red;
    .border {
      position: absolute;
      width: 100%;
      height: 100%;
      left: -10px;
      top: -10px;
      padding: 10px;
      border: 1px solid red;
      pointer-events: none;
    }
  }
}
</style>

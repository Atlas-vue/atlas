<template>
  <div class="chart-layout">
    <div class="atlas-canvas">
      <vue-draggable-resizable
        v-for="item in allChartList"
        :id="item.id"
        :key="item.id"
        class-name="atlas-chart"
        class-name-draggable="my-handle-class"
        :w="item.width"
        :h="item.height"
        :x="item.x"
        :y="item.y"
        :z="item.zIndex"
        @dragging="onDrag"
        @resizing="onResize"
        @activated="onClick(item)"
        :parent="true"
      >
        <div :class="{'border': curChart.id === item.id}"></div>
        <div class="chart1">
          <span>{{item.name}}{{item.zIndex}}</span>
        </div>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import resize from '@/utils/resize-window'
export default {
  name: 'ChartLayout',
  computed: mapState({
    allChartList: 'allChartList',
    curChart: 'curEdit'
  }),
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
      this.curChart.x = x
      this.curChart.y = y
      this.$store.commit('setCurEdit', this.curChart)
    },
    onResize (x, y, w, h) {
      this.curChart.x = x
      this.curChart.y = y
      this.curChart.width = w
      this.curChart.height = h
      this.$store.commit('setCurEdit', this.curChart)
    },
    onClick (item) {
      this.$store.commit('setCurEdit', item)
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

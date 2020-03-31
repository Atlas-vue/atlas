<template>
  <div class="chart-layout">
    <div class="atlas-canvas">
      <vue-draggable-resizable
        v-for="item in allChartList"
        :id="item.id"
        :key="item.id"
        :active="item.id === curChart.id"
        class-name="atlas-chart"
        class-name-draggable="my-handle-class"
        :w="item.models.base.width"
        :h="item.models.base.height"
        :x="item.models.base.x"
        :y="item.models.base.y"
        @dragging="onDrag"
        @resizing="onResize"
        @activated="onClick(item.id)"
        :parent="true"
      >
        <navigator-line v-show="item.id === curChart.id" :x="item.models.base.x" :y="item.models.base.y" />
        <!-- <div :class="{'border': curChart.id === id}"></div> -->
        <component v-bind:is="item.info.name" :config="item"></component>
      </vue-draggable-resizable>
    </div>
    <div class="transform-ratio">
      <span class="label">缩放：</span>
      <div>
        <el-slider
        class="transform-ratio-slider"
        v-model="transformRatio"
        :min="10"
        :max="110"
        :format-tooltip="formatTooltip"
        @change="changeTransformRatio"
        ></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import resize from '@/utils/resize-window'
import Components from '@/components'
import navigatorLine from '@/components/navigator-line'
export default {
  name: 'ChartLayout',
  components: {
    ...Components,
    navigatorLine
  },
  computed: mapState({
    allChartList: 'allChartList',
    curChart: 'curEdit'
  }),
  data () {
    return {
      chartLayout: null,
      atlasCanvas: null,
      transformRatio: 50
    }
  },
  mounted () {
    this.initResize()
  },
  methods: {
    initResize () {
      this.chartLayout = document.querySelector('.chart-layout')
      this.atlasCanvas = document.querySelector('.atlas-canvas')
      this.atlasCanvas.style.width = '1920px'
      this.atlasCanvas.style.height = '1080px'
      resize(this.atlasCanvas, this.chartLayout)
      this.transformRatio = parseFloat(this.atlasCanvas.style.transform.replace(/[a-z()]/g, '')).toFixed(2) * 100
    },
    onDrag (x, y) {
      this.curChart.models.base.x = x
      this.curChart.models.base.y = y
      this.setCurEdit(this.curChart)
    },
    onResize (x, y, w, h) {
      this.curChart.models.base.x = x
      this.curChart.models.base.y = y
      this.curChart.models.base.width = w
      this.curChart.models.base.height = h
      this.setCurEdit(this.curChart)
    },
    onClick (item) {
      const curChart = this.allChartList.find(({ id }) => id === item)
      this.setCurEdit(curChart)
    },
    formatTooltip (val) {
      return `${val}%`
    },
    changeTransformRatio (val) {
      const ratin = val / 100
      this.atlasCanvas.style.transform = `scale(${ratin})`
    },
    ...mapMutations(['setCurEdit'])
  }
}
</script>

<style lang="less" scoped>
.chart-layout {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  .my-handle-class {
    position: absolute;
    color: #fff;
    box-sizing: border-box;
    &.active{
      border: 2px solid #55b6f7;
    }
    &:hover{
      background-color: #55b6f7;
    }
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
  .transform-ratio {
    position: fixed;
    width: 200px;
    bottom: 0;
    right: 350px;
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    &-slider {
      float: right;
      width: 300px;
    }
  }
}
</style>

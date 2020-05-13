<template>
  <div id="editor">
    <div id="toolbar">
      <!-- 组件库展示 -->
      <toolbar></toolbar>
    </div>
    <div id="level-ctrl">
      <!-- 图层控制 -->
      <level-ctrl></level-ctrl>
    </div>
    <div id="main">
      <!-- 大屏展示 -->
      <chart-layout></chart-layout>
    </div>
    <div id="config-ctrl">
      <!-- 组件配置 -->
      <config-ctrl></config-ctrl>
    </div>
  </div>
</template>

<script>
import { LevelCtrl, Toolbar, ConfigCtrl, ChartLayout } from './subPages'
export default {
  name: 'Edit',
  components: {
    Toolbar,
    LevelCtrl,
    ConfigCtrl,
    ChartLayout
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('updateAllChart', [])
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
#editor {
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  overflow: hidden;
  text-align: center;
  > div {
    position: absolute;
  }
  #toolbar {
    height: 80px;
    left: 0;
    right: 0;
    border: 1px solid rgb(55, 145, 62);
  }
  #level-ctrl {
    width: 200px;
    top: 80px;
    left: 0;
    bottom: 0;
    border: 1px solid rgb(36, 68, 136);
  }
  #config-ctrl {
    box-sizing: border-box;
    width: 300px;
    top: 80px;
    right: 0;
    bottom: 0;
    border: 1px solid rgb(36, 68, 136);
    padding: 0 10px;
  }
  #main {
    top: 80px;
    left: 200px;
    right: 300px;
    bottom: 0;
    .chart1 {
      z-index: 50;
    }
    .chart2 {
      z-index: 51;
    }
  }
}
</style>

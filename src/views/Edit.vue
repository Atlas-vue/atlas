<template>
  <div id="editor">
    <div id="toolbar">
      <toolbar></toolbar>
    </div>
    <div id="level-ctrl">
      <level-ctrl></level-ctrl>
    </div>
    <div id="main">
      <chart-layout></chart-layout>
    </div>
    <div id="config-ctrl">
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    width: 300px;
    top: 80px;
    right: 0;
    bottom: 0;
    border: 1px solid rgb(36, 68, 136);
  }
  #main {
    top: 80px;
    left: 200px;
    right: 300px;
    bottom: 0;
    border: 1px solid red;
    .chart1 {
      z-index: 50;
    }
    .chart2 {
      z-index: 51;
    }
  }
}
</style>

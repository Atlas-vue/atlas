<template>
  <div id="editor">
    <div id="toolbar">
      <div></div>
    </div>
    <div id="level-ctrl"></div>
    <div id="main">
      <vue-draggable-resizable
        v-for="item in 10"
        :key="item"
        class-name="atlas-chart"
        class-name-draggable="my-handle-class"
        :w="100"
        :h="100"
        :x="item*100"
        :y="item*50"
        :z="item"
        @dragging="onDrag"
        @resizing="onResize"
        @activated="onClick(item)"
        :parent="true"
      >
        <div class="chart1"></div>
      </vue-draggable-resizable>
    </div>
    <div id="config-ctrl"></div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  methods: {
    onDrag () {
      console.log(111)
    },
    onResize () {
      console.log(222)
    },
    onClick (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
#editor {
  position: relative;
  width: 100%;
  height: 100%;
  > div {
    position: absolute;
  }
  #main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .my-handle-class {
      position: absolute;
      background: black;
    }
    .chart1 {
      z-index: 50;
    }
    .chart2 {
      z-index: 51;
    }
  }
}
</style>

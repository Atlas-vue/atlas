<template>
  <div class="text-layout">{{content}}</div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    content () {
      const content = this.options.fileds.find(({ prop }) => prop === 'content')
      return content.value || '默认文档'
    }
  },
  created () {
    console.log(this.options)
  }
}
</script>

<style lang="less" scoped>
.text-layout {
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
}
</style>

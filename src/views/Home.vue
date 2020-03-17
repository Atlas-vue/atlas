<template>
  <el-menu
    default-active="1"
    class="el-menu-demo"
    @select="handleSelect"
  >
    <el-menu-item index="1">大屏列表</el-menu-item>
    <el-menu-item index="2">配置文档</el-menu-item>
    <el-menu-item index="3">文档帮助</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

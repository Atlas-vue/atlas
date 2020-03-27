<template>
  <div class="config-ctrl">
    <el-tabs v-model="currentTab">
      <el-tab-pane v-for="item in tabPaneList"
        :key="item.key"
        :label="item.title"
        :name="item.key">
        <custom-form :fields="item.fields" v-model="modelMap[item.key]"></custom-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import customForm from '@/components/custom-form'
import { mapState } from 'vuex'

export default {
  name: 'ConfigCtrl',
  components: {
    customForm
  },
  computed: mapState({
    curChart: 'curEdit'
  }),
  data () {
    return {
      currentTab: '',
      tabPaneList: [],
      modelMap: null
    }
  },
  watch: {
    curChart: {
      handler (newV) {
        newV && Object.keys(newV).length && this.initTabPanel()
      },
      immediate: true
    }
  },
  methods: {
    initTabPanel () {
      const { props, models } = this.curChart
      this.currentTab = props[0].key
      this.tabPaneList = props
      this.modelMap = models
    }
  }
}
</script>

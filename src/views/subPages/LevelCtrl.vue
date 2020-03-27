<template>
  <div class="level-ctrl">
    <div class="level-ctrl__header">
      <div class="level-ctrl-title">图层管理</div>
    </div>
    <div class="level-ctrl-toolbar">
      <div class="level-ctrl-toolbar-btn" @click="move('Down')"><i class="el-icon-arrow-down"></i></div>
      <div class="level-ctrl-toolbar-btn" @click="move('Up')"><i class="el-icon-arrow-up"></i></div>
      <div class="level-ctrl-toolbar-btn" @click="move('Bottom')"><i class="el-icon-download"></i></div>
      <div class="level-ctrl-toolbar-btn" @click="move('Top')"><i class="el-icon-upload2"></i></div>
    </div>
    <div class="level-ctrl__body">
      <ul class="layer-manager">
        <li class="layer-manager-item"
          v-for="chart in allChartList"
          :key="chart.id"
          :class="{'isCurrent': currentLayer.id === chart.id}"
          @click="clickLevel(chart)">
          {{chart.info.label}}{{chart.zIndex}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'
import moveIns from '@/utils/array-move-item.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'LevelCtrl',
  computed: mapState({
    allChartList: 'allChartList',
    currentLayer: 'curEdit'
  }),
  data () {
    return {}
  },
  methods: {
    clickLevel (chart) {
      this.setCurEdit(chart)
    },
    move (type) {
      const { allChartList, currentLayer } = this
      if (!currentLayer || allChartList.length < 2) return false
      const preLayerManagerList = cloneDeep(allChartList)
      const currentIndex = preLayerManagerList.findIndex(item => item.id === currentLayer.id)
      moveIns[`move${type}`](preLayerManagerList, currentIndex)
      this.updateAllChart(preLayerManagerList)
    },
    ...mapMutations(['setCurEdit', 'updateAllChart'])
  }
}
</script>

<style lang="less" scoped>
.level-ctrl{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header{
    line-height: 36px;
    flex-shrink: 0;
  }
  &-toolbar{
    line-height: 30px;
    display: flex;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    flex-shrink: 0;
    &-btn{
      flex: 1;
      cursor: pointer;
      &:not(:last-child){
        border-right: 1px solid #ddd;
      }
      &:hover{
        background: #dedede;
      }
      i{
        color: #6f6d6d;
        font-weight: bolder;
      }
    }
  }
  &__body{
    flex: 1;
    .layer-manager{
      margin: 0;
      padding: 0;
      list-style: none;
      &-item{
        list-style: none;
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
        cursor: move;
        border: 1px solid transparent;
        border-bottom-color: #ccc;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        box-sizing: border-box;
        font-size: 14px;
        &:hover{
          border-color: #23b7e5;
        }
        &.isCurrent{
          background-color: rgba(0,192,222,.1);
        }
      }
    }
  }
}
</style>

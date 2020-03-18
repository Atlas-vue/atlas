<template>
  <div>
    {{allChartList}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LevelCtrl',
  computed: mapState({
    allChartList: 'allChartList'
  })
}
</script>

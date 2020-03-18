<template>
  <div>
    {{curChart}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ConfigCtrl',
  computed: mapState({
    curChart: 'curEdit'
  })
}
</script>

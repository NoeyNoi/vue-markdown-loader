<template>
  <div class="test">
    <div class="title">hello {{ msg }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    return {
      msg: ref('vue3')
    }
  }
})
</script>

<style lang='less'>
.test {
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  background: rgb(169, 228, 225);
  .title {
    color: cadetblue;
  }
}
</style>

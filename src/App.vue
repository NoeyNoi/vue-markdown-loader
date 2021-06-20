<template>
  <Doc />
</template>

<script>
import Doc from './components/test.md'
import 'highlight.js/styles/base16/dracula.css'

export default {
  name: 'App',
  components: {
    Doc
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

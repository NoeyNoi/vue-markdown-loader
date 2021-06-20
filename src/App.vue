<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Doc />
</template>

<script>
import Doc from './components/test.md'
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

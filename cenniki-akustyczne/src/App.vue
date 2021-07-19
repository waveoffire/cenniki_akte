<template>
  <div id="app">
    <ploteryApp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ploteryApp from "./components/akustyczne.vue";

@Component({
  components: {
    ploteryApp,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

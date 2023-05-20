<template>
  <div class="content">
    <div class="testcolor" style="margin-top: 40px">
      <p>vue2ts</p>
    </div>
    <div class="testcolor">
      <p>Vue2 - Typescript - Class Component - Webpack</p>
    </div>
    <img src="@/assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style scoped>
.testcolor {
  font-size: larger;
  color: cornflowerblue;
}
</style>

<template>
  <div id="app">
	<navList></navList>

  <router-view></router-view>
  </div>
</template>

<script>
import navList from "./common/components/navList.vue"

export default {
  name: 'app',
  components: {
    navList
  }
}
</script>

<style>

</style>

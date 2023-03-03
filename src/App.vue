<template>
  <div class="container mx-auto lg:max-w-screen-lg lg:px-5 xsm:px-10 md:max-w-screen-md sm:max-w-screen-sm">
    <nav-bar></nav-bar>
    <!-- <hr class="mt-5 mb-5"> -->
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent
  }
}
</script>

<style></style>

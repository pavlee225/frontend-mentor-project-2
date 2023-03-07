<template>
  <!-- <div class="container mx-auto lg:max-w-screen-lg lg:px-5 xsm:px-10 md:max-w-screen-md sm:max-w-screen-sm"> -->
  <!--  -->
  <!-- <hr class="mt-5 mb-5"> -->
  <!-- <main-content></main-content> -->
  <!-- <router-view></router-view> -->
  <!-- </div> -->
  <div>
    <!-- <home-page></home-page> -->
    <!-- <check-out></check-out> -->
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

// import MainContent from './components/MainContent.vue'
// import HomePage from "@/pages/HomePage.vue"
// import CheckOut from "./pages/CheckOut.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    // MainContent
    // HomePage,
    // CheckOut
  }
}
</script>

<style></style>

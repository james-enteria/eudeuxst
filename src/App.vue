<template>
  <div class="container-fluid p-0 ">
    <app-header />
    <app-banner />
    <app-projects />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Banner from './components/Banner.vue'
  import Projects from './components/Projects.vue'
  export default {
    components: {
      appHeader: Header,
      appBanner: Banner,
      appProjects: Projects
    }
  }
</script>

<style>
  .container-fluid{
  overflow: hidden;
}
</style>
<template>
  <v-app>
    
  <div class="container-fluid p-0 ">
    <app-header />

    <v-content>
      <app-banner />
      <v-scale-transition mode="out-in" origin="center center">
        
        <router-view></router-view> 
      </v-scale-transition>
      
    </v-content>
    
  </div>
  </v-app>

</template>

<script>
  import Header from './components/Header.vue'
  import Banner from './components/Banner.vue'
  
  export default {
    components: {
      appHeader: Header,
      appBanner: Banner
    }
  }
</script>

<style>

  .container-fluid{
  overflow: hidden;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
  
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1; 
  }
  to {
     transform: translateY(-30px);
    opacity: 0;
  }
}



</style>
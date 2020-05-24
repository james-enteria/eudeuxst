<template>
  <div class="gallery_img row no-gutters">
    
          <app-project  v-for="project in projects" :project="project" :key="project.id" />
        
  </div>
	
	
</template>

<script>
	import Project from './Project.vue';
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'projects'
			])
		},
    components: {
      
			appProject: Project
		}
	}
</script>

<style>

  .gallery_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

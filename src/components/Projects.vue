<template>
	
		<app-project />
	
</template>

<script>
	import Project from './Project.vue';
	//import { mapGetters } from 'vuex'
	export default {
		/*computed: {
			...mapGetters([
				'projects'
			])
		},*/
		components: {
			appProject: Project
		}
	}
</script>

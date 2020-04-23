<template>
	<div>
		<div class="row text-center no-gutters">
			<div class="col-12">
				<h1>EUDEUXST</h1>
			</div>
		</div>


		<div class="row text-center no-gutters">
			
			<div class="col-12">
				<h4>freelance graphic artist</h4>
			</div>

		</div>

		<app-projects></app-projects>
	</div>
</template>

<script>
	import Projects from './Projects.vue'

	export default {
		components: {
			appProjects: Projects
		}
	}
</script>

<style scoped>

	@font-face {
		font-family: Nexa;
		src: url(../../public/nexa.otf);
}

	@font-face {
		font-family: Dense;
		src: url(../../public/dense.otf);
}


	h1 {
		font-family: Nexa, sans-serif;
		letter-spacing: 1.5vw;
		margin-right: -1.5vw;
		font-size: 2.3em;
	}

	h4 {
		font-family: Dense, sans-serif;
		letter-spacing: 0.05em ;
		font-size: 1.2em;
	}
</style>
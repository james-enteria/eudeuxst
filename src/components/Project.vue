

<template>
	<v-scale-transition mode="in-out" origin="center center">
	<div class="col-md-4 col-12">
			<img class="gallery_img img-responsive" :src="project.source">
		</div>
    </v-scale-transition>
	
</template>

<script>	
export default {
	props: ['project']
    
}
</script>

<style scoped>
	.gallery_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>



<template>
	<div>
		<v-hover>
			<template v-slot:default="{ hover }">
				<div class="col-sm-4 col-12" >
					<img class="gallery_img img-responsive"  :src="project.source">
					<v-fade-transition>
						<v-overlay v-if="hover" absolute :opacity="0.90" class="text-center">
							<h1>{{project.name}}</h1>
							<p style="cursor: pointer;">-click for more info-</p>
						</v-overlay>
					</v-fade-transition>
					
				</div>
			</template>
		</v-hover>

		
		
	</div>
	
		
	
	
</template>

<script>	
export default {
	props: ['project'],
	data() {
		return {
			absolute: true,
			overlay: false
		}
	},
	methods: {
		setToFalse() {
			setTimeout(()=> {
				return false;
			}, 2000)
		}
	}
    
}
</script>

<style scoped>
	.gallery_img {
    width: 100%;
    height: 100%;
     object-fit: cover; 
    

}

	
</style>



<template>
	
		<v-hover>
			<template v-slot:default="{ hover }">
				<div class="col-md-4 col-12" >
					<img class="gallery_img img-responsive"  :src="project.source">
					<v-fade-transition>
						<v-overlay v-if="hover" absolute :opacity="0.90" class="text-center">
							<h1>{{project.name}}</h1>
							<v-btn  light data-toggle="modal" :data-target="'#modal'+ project.id" >click me for info </v-btn>

						</v-overlay>
					</v-fade-transition>
					<div class="modal fade bd-example-modal-lg" :id="'modal'+ project.id" tabindex="-1" role="dialog"  aria-hidden="true">
						<div class="modal-dialog modal-lg" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">{{ project.name }}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<div class="container-fluid">
										<div class="row">
											<div class="col-4">
												<img class="gallery_img img-responsive"  :src="project.source">	
												
											</div>

											<div class="col-8">
													<p><strong> insert some description here about your work</strong></p>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nemo a sint aliquam perspiciatis, ea voluptas maxime dolorem eveniet omnis, reiciendis nobis commodi, laboriosam eos, tempore odio dignissimos molestiae nostrum.</p>
												
											</div>
										</div> 
									</div>

								</div>
								<div class="modal-footer">
									<v-btn  data-dismiss="modal">Close</v-btn>
								</div>
							</div>
						</div>
					</div>  
				</div>
			</template>
			<!-- <project-modal></project-modal> -->
     
		
		</v-hover>
		
	
	
</template>

<script>
// import ProjectModal from './ProjectModal.vue'

export default {
	props: ['project'],
	data() {
		return {
			absolute: true,
			overlay: false,
			dialog: false
		}
	},
	methods: {
		setToFalse() {
			setTimeout(()=> {
				return false;
			}, 2000)
		}
	}
	// },
	// components: {
	// 	projectModal: ProjectModal
	// }
    
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
	.gallery_img {
    width: 100%;
    height: 100%;
     object-fit: cover; 
}

	h5 {
		font-family: Nexa, sans-serif;
		font-size: 1.3em;
	}


	
</style>



<template>
	
		<v-hover>
			<template v-slot:default="{ hover }">
				<div class="col-sm-4 col-12" >
					<img class="gallery_img img-responsive"  :src="project.source">
					<v-fade-transition>
						<v-overlay v-if="hover" absolute :opacity="0.90" class="text-center">
							<h1>{{project.name}}</h1>
							<v-btn @click="alertMe" light data-toggle="modal" :data-target="'#modal'+ project.id" >click me for info </v-btn>

						</v-overlay>
					</v-fade-transition>
					<div class="modal fade" :id="'#modal'+ project.id" tabindex="-1" role="dialog"  aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Area PE 1</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
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
		},
		alertMe(){
			console.log('#modal' + this.project.id)
		}
	}
	// },
	// components: {
	// 	projectModal: ProjectModal
	// }
    
}
</script>

<style scoped>
	.gallery_img {
    width: 100%;
    height: 100%;
     object-fit: cover; 
    

}

	
</style>

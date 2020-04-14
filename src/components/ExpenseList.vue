<template>
	<div>
		<ul class="list-group">
			<appList v-for="(expense, index) in expenses" :key="expense.id" :expense="expense">{{index + 1}}.) </appList>
		</ul>
	</div>
</template>

<script>
	//import { mapGetters } from 'vuex'
	import Lists from './Lists.vue'
	export default {
		
		computed: {
			expenses(){
					return this.$store.getters.expenses
				
			}
		},
		components: {
			appList: Lists
		}
	}
</script>
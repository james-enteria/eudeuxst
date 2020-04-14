<template>
	<div >
		<label for="name">Item
			<input type="text" class="form-control" name="name" v-model="itemName" placeholder="enter name">
		</label>
		<br><br>
		<label for="price">Price
			<input type="number" class="form-control" name="price" v-model="itemPrice" placeholder="enter price" @keyup.enter="submitData">
		</label>
		<hr>
		<button class="btn btn-primary" @click="submitData">Submit</button>
	</div>
</template>

<script>
	export default {
		
		data() {
			return{
				itemName: '',
				itemPrice: ''
			}
		},
		methods: {
			submitData() {
				let name = this.itemName;
				let price = this.itemPrice;
				if (name != '' && price != '') {
				const list = {
					name,
					price
				};

				this.$store.dispatch('submitItem', list);
				console.log(list);
				}
				name = '';
				price = '';
			}
		}
	}	
</script>
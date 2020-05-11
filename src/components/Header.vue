<template>
	
	<v-app-bar app color="white" fixed elevate-on-scroll scroll-on-target>
		<v-layout row wrap align-center>

			<v-flex class="text-center">
				<v-btn text rounded to="/">HOME</v-btn>
				<v-btn text rounded to="/about">ABOUT</v-btn>
				<v-btn text rounded to="/contact">CONTACT</v-btn>
				
			</v-flex>
		</v-layout>
	</v-app-bar>
</template>

<script>
	export default {
		data: () => ({
			showThis: true,
			collapseOnScroll: true
		})
	}
</script>

<style>

	@font-face {
		font-family: Nexa;
		src: url(../../public/nexa.otf);
}

	.showButton {
		display: none;
	}

</style>
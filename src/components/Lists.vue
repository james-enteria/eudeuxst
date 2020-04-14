<template>
	<div>
		<li class="list-group-item"><slot></slot> {{expense.name}} | <span class="ml-2">{{expense.price | currency}}</span></li>
	</div>
</template>

<script>
	export default {
		props: ['expense']
	}
</script>
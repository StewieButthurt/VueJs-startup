<template>
	<div class="latest-works__list-element" @click="$emit('removeClass', num)"
	:class="{ 'colorRed' : classColorRed}"
	>
		{{ title }}
	</div>
</template>

<script>
	export default {
		props: [
			'title',
			'classColorRed',
			'num'
		]
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.latest-works__list-element
		margin-left: 15px
		margin-right: 15px
		font-size: 16px
		cursor: pointer
	
	.colorRed 
		color: #c0301c
	
</style>
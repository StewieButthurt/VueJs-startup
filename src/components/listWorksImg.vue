<template>
	<div class="latest-works__img"  @mouseleave="mouseLeaveHoverClasses()">
		<img :src="img" alt="png">
		<div class="latest-works__img-title" :class="hoverClass1" @mouseenter="hoverClass2 = 'latest-works__img-img__mask-hover'">{{ title }}</div>
		<div class="latest-works__img-prof" :class="hoverClass1" @mouseenter="hoverClass2 = 'latest-works__img-img__mask-hover'">{{ prof }}</div>
		<a href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" target="_blank" class="latest-works__img-view" :class="hoverClass1" @mouseenter="hoverClass2 = 'latest-works__img-img__mask-hover'">
			<span class="latest-works__img-view-text">
				View
			</span>
		</a>
		<span class="latest-works__img-img__mask" @mouseenter="hoverClass1 = 'latest-works__img-flex'" :class="hoverClass2"></span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hoverClass1: '',
				hoverClass2: ''
			}
		},
		methods: {
	     	mouseLeaveHoverClasses() {
	     			this.hoverClass1 = '';
	     			this.hoverClass2 = '';
	     	}
	    },
		props: [
			'title',
			'prof',
			'img'
		]
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.latest-works__img
		+row-flex()
		+size(3)
		+size-ms(5)
		+size-xs(10)
		position: relative
		margin: 15px

	.latest-works__img img 
		height: 100%
		width: 100%

	.latest-works__img-title
		color: #ffffff
		font-size: 14px
		position: absolute 
		top: 32%
		width: 100%
		justify-content: center
		display: none
		z-index: 2
		+ms(font-size, 16px)

	.latest-works__img-prof
		color: #ffffff
		font-size: 12px
		position: absolute
		top: 42%
		width: 100%
		justify-content: center
		display: none
		z-index: 2

	.latest-works__img-view
		position: absolute
		top: 54%
		width: 100%
		justify-content: center
		display: none
		text-align: center
		z-index: 2
		cursor: pointer
		text-decoration: none 
		
		

	.latest-works__img-img__mask
		background-color: red 
		position: absolute
		top: 0
		left: 0
		opacity: 0
		width: 100%
		height: 100%

	.latest-works__img-img__mask:hover
		background-color: red 
		position: absolute
		top: 0
		left: 0
		opacity: 0.7
		width: 100%
		height: 100%
		z-index: 1
	
	.latest-works__img-flex
		display: flex

	.latest-works__img-img__mask-hover
		background-color: red 
		position: absolute
		top: 0
		left: 0
		opacity: 0.7
		width: 100%
		height: 100%
		z-index: 1

	.latest-works__img-view-text
		width: 100px
		height: 30px
		background-color: white
		display: flex 
		justify-content: center
		flex-wrap: wrap 
		align-content: center
		color: #c0301c
		font-size: 14px
		text-transform: uppercase
		letter-spacing: 1.4px
		+xxs(width, 80px)
		+xxs(height, 20px)
		+xxs(font-size, 12px)

</style>
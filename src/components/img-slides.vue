<template>

	<div class="slider-element">
		<div class="wrapper-img"  @mouseleave="mouseLeaveHoverClasses()">
			<img :src="imgSlide" alt="people">
			<span class="img__mask" @mouseenter="hoverClass1 = 'hover-social-icon'" :class="hoverClass2"></span>
			<a class="slider-element__icon-social-1" target="_blank" href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" :class="hoverClass1" @mouseenter="hoverClass2 = 'class-hover-mask'">
				<img src="../img/icon-social-1.png" alt="icon">
			</a>
			<a class="slider-element__icon-social-2" target="_blank" href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" :class="hoverClass1" @mouseenter="hoverClass2 = 'class-hover-mask'">
				<img src="../img/icon-social-2.png" alt="icon">
			</a>
			<a class="slider-element__icon-social-3" target="_blank" href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" :class="hoverClass1" @mouseenter="hoverClass2 = 'class-hover-mask'">
				<img src="../img/icon-social-3.png" alt="icon">
			</a>
			<a class="slider-element__icon-social-4" target="_blank" href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" :class="hoverClass1" @mouseenter="hoverClass2 = 'class-hover-mask'">
				<img src="../img/icon-social-4.png" alt="icon">
			</a>
		</div>
		<span class="slider-element__name-people">
			{{ namePeople }}
		</span>
		<span class="slider-element__profession-people">
			{{ professionPeople }}
		</span>
	</div>
</template>

<script>
	export default {

		props: [
			'imgSlide',
			'namePeople',
			'professionPeople',
			'index'
		],
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
	    }
}
</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.slider-element
		color: #555555
		text-align: center
		span
			display: block
		position: relative

	.slider-element__name-people
		font-size: 14px
		margin-top: 15px

	.slider-element__profession-people
		font-size: 13px
		margin-top: 10px

	.wrapper-img
		position: relative 

	.wrapper-img a img 
		width: 100%
		height: 100%
	
	.img__mask
		position: absolute
		top: 0
		left: 0
		background-color: black 
		opacity: 0
		width: 100%
		height: 100%
		

	.img__mask:hover
		position: absolute
		top: 0
		left: 0
		background-color: black 
		opacity: 0.5
		width: 100%
		height: 100%
	


	.slider-element__icon-social-1
		position: absolute
		top: 75%
		left: 28%
		display: none

	.slider-element__icon-social-2
		position: absolute
		top: 76%
		left: 39%
		display: none

	.slider-element__icon-social-3
		position: absolute
		top: 76%
		left: 53%
		display: none

	.slider-element__icon-social-4
		position: absolute
		top: 76%
		left: 67%
		display: none

	.hover-social-icon
		display: block

	.class-hover-mask
		position: absolute
		top: 0
		left: 0
		background-color: black 
		opacity: 0.5
		width: 100%
		height: 100%
		

	#carousel_0ihi542oump
		position: relative 

	.owl-nav
		position: relative
		display: flex
		justify-content: space-between
		width: 100%
		height: 10%

	.owl-prev 
		position: absolute
		width: 30px
		height: 32px 
		bottom: 650%

	.owl-next
		background: red
		position: absolute
		width: 30px
		height: 32px 
		right: 0px
		bottom: 650%
		+ms(right, 1.6%)
	
	.owl-theme .owl-nav [class*='owl-']
		background: #555555
		margin: 0px
		padding: 0px
		border-radius: 0px
		color: #555555
	
	
	.owl-theme .owl-nav .owl-prev	
		background: url('../img/arow-left.png') no-repeat #555555 47% 50%
		color: transparent 

	.owl-theme .owl-nav .owl-prev:hover 
		background: url('../img/arow-left.png') no-repeat #c0301c 47% 50%
		color: transparent 

	.owl-theme .owl-nav .owl-next
		background: url('../img/arow-right.png') center no-repeat #555555
		color: transparent 
	
	.owl-theme .owl-nav .owl-next:hover 
		background: url('../img/arow-right.png') center no-repeat #c0301c
		color: transparent 

	

</style>
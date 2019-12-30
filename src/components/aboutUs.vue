<template>
	<div id="About" class="container container_bgc-grey">
		<div class="services">
			<div class="services__text">
				About us
			</div>
			<div class="services__line">
				<img src="../img/line.png" alt="png-line">
			</div>
			<div class="services__discreption">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet
			</div>
		</div>
		<div class="about__discreption">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
		</div>
		<div class="about__discreption">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.
		</div>
		<app-slider-carousel class="carosel-style"></app-slider-carousel>
		<img-slides
			v-for="(item, index) in info"
			:key="index"
			:imgSlide="item.imgSlide"
			:namePeople="item.namePeople"
			:professionPeople="item.professionPeople"
			:index="index"
			class="img-slides-not-slider"
		></img-slides>
	</div>
</template>

<script>
	import AppSliderCarousel from './carousel-slider'
	import ImgSlides from './img-slides'

	export default {
		components: {
			AppSliderCarousel,
			ImgSlides
		},
		data() {
			return {
				info: [
					{
						imgSlide: require('../assets/img-slider/people-1.png'),
						namePeople: 'Md. Khalil Uddin',
						professionPeople: 'Head of Ideas'
					},
					{
						imgSlide: require('../assets/img-slider/people-2.png'),
						namePeople: 'Rubel Miah',
						professionPeople: 'Lead WordPress Developer'
					},
					{
						imgSlide: require('../assets/img-slider/people-3.png'),
						namePeople: 'Shamim Mia',
						professionPeople: 'Sr. Web Developer'
					},
					{
						imgSlide: require('../assets/img-slider/people-4.png'),
						namePeople: 'John Doe',
						professionPeople: 'Front-end Developer'
					}
				]
			}
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.container_bgc-grey
		background-color: #f8f8f8

	.about__discreption
		+wrapper()
		+row-flex()
		+size(4.3)
		font-size: 14px
		margin-top: 70px
		color: #555555
		+size-ms(12)

	.carosel-style
		+wrapper()
		+row-flex()
		+size(9)
		+size-ms(12)
		+xs(display, none)
		margin-top: 71px

	.img-slides-not-slider
		display: none 
		+xs(display, flex)
		+xs(flex-direction, column)
		margin-top: 50px

	.img-slides-not-slider .img__mask:hover
		height: 99%

	.img-slides-not-slider .class-hover-mask
		height: 99%

</style>
<template>
	<carousel :margin="10" :autoplay="false" :loop="false" :nav="true" :dots="false">
		<img-slides
			v-for="(item, index) in info"
			:key="index"
			:imgSlide="item.imgSlide"
			:namePeople="item.namePeople"
			:professionPeople="item.professionPeople"
			:index="index"
		></img-slides>
	</carousel>
</template>

<script>
	import carousel from 'vue-owl-carousel'
	import ImgSlides from './img-slides'

	export default {
	    components: { 
	    	carousel,
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
	
<style lang="sass" >
	@import "../smart-grid.sass";
	
	
</style>
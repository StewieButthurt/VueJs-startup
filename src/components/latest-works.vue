<template>
	<div id="Works" class="latest-works">
		<div class="latest-works__head">
			<div class="latest-works__title">
				Latest Works
			</div>
			<div class="latest-works__line">
				<img src="../img/line.png" alt="png-line">
			</div>
				<transition-group
					name="fadeIn" 
					enter-active-class="animated fadeIn" 
					leave-active-class="animated fadeOut"
					mode="out-in" 
					appear
					key="app-latest-works-works"
					class="latest-works__list"
				>
					<app-latest-works-works
						v-for="(item, index) in listWorks"
						:key="item.title"
						:title="item.title"
						@removeClass="addRemoveClass"
						:num="index"
						:classColorRed="item.classColorRed"
					></app-latest-works-works>
				</transition-group>
		</div>
		<div class="latest-works__image">
			<app-list-works-img
				v-for="(item, index) in listWorksBranding"
				:title="item.title"
				:prof="item.prof"
				:img="item.img"
				:key="item.title"
				v-if="listWorks[1].work == true"
			></app-list-works-img>
			<app-list-works-img
				v-for="(item, index) in listWorksDesign"
				:title="item.title"
				:prof="item.prof"
				:img="item.img"
				:key="item.title"
				v-if="listWorks[2].work == true"
			></app-list-works-img>
			<app-list-works-img
				v-for="(item, index) in listWorksDevelopment"
				:title="item.title"
				:prof="item.prof"
				:img="item.img"
				:key="item.title"
				v-if="listWorks[3].work == true"
			></app-list-works-img>
			<app-list-works-img
				v-for="(item, index) in listWorksStrategy"
				:title="item.title"
				:prof="item.prof"
				:img="item.img"
				:key="item.title"
				v-if="listWorks[4].work == true"
			></app-list-works-img>
		</div>
			
	</div>
</template>


<script>
	import AppLatestWorksWorks from './latest-works__works'
	import AppListWorksImg from './listWorksImg'

	export default {
	    components: { 
	    	AppLatestWorksWorks,
	    	AppListWorksImg
	    },
	    data() {
	    	return {
	    		listWorks: [
	    			{
	    				title: "All",
	    				classColorRed : true,
	    				work: true
	    			},
	    			{
	    				title: "Branding",
	    				classColorRed : false,
	    				work: true
	    			},
	    			{
	    				title: "Design",
	    				classColorRed : false,
	    				work: true
	    			},
	    			{
	    				title: "Development",
	    				classColorRed : false,
	    				work: true
	    			},
	    			{
	    				title: "Strategy",
	    				classColorRed : false,
	    				work: true
	    			}

	    		],
	    		listWorksBranding: [
	    			{
	    				title: "Hair Dresser",
	    				prof: "Branding",
	    				img: require('../assets/img-works/hair-dresser.png')
	    			},
	    			{
	    				title: "Bicycle",
	    				prof: "Branding",
	    				img: require('../assets/img-works/bicykle.png')
	    			}
	    		],
	    		listWorksDesign: [
	    			{
	    				title: "Camera",
	    				prof: "Design",
	    				img: require("../assets/img-works/camera.png")
	    			},
	    			{
	    				title: "Bird",
	    				prof: "Design",
	    				img: require('../assets/img-works/Bird.png')
	    			},
	    			{
	    				title: "Events",
	    				prof: "Design",
	    				img: require('../assets/img-works/events.png')
	    			}
	    		],
	    		listWorksDevelopment: [
	    			{
	    				title: "Desk",
	    				prof: "Development",
	    				img: require('../assets/img-works/Desk.png')
	    			},
	    			{
	    				title: "Notebook",
	    				prof: "Development",
	    				img: require('../assets/img-works/notebook.png')
	    			}
	    		],
	    		listWorksStrategy: [
	    			{
	    				title: "Laptop",
	    				prof: "Strategy",
	    				img: require('../assets/img-works/laptop.png')
	    			},
	    			{
	    				title: "Canvas",
	    				prof: "Strategy",
	    				img: require('../assets/img-works/Canvas.png')
	    			}
	    		]
	    	}
	    },
	    methods: {
	    	addRemoveClass(num) {
	    		
	    		for(let i = 0; i < this.listWorks.length; i++) {
	    			if( num === i && this.listWorks[i].title !== "All") {
	    				this.listWorks[i].classColorRed = true;
	    				this.listWorks[i].work = true;
	    				for(let g = 0; g < this.listWorks.length; g++) {
	    					if( i !== g) {
	    						this.listWorks[g].work = false;
	    						this.listWorks[g].classColorRed = false;
	    					}
	    				}
	    			} else if (num === i && this.listWorks[i].title === "All") {
	    				this.listWorks[i].classColorRed = true;
	    				for(let d = 0; d < this.listWorks.length; d++) {
	    					this.listWorks[d].work = true;
	    					if( i !== d) {
	    						this.listWorks[d].classColorRed = false;
	    					}
	    				}
	    			}
	    		}
	    	}
	    }

	}
</script>


<style lang="sass">
	@import "../smart-grid.sass";

	.latest-works
		+wrapper()
		+row-flex()
		flex-direction: column
		flex-wrap: wrap 
		align-content: center
		padding-top: 7.36vmax
		padding-bottom: 7.36vmax
		font-family: Montserrat-Medium
		font-weight: 700
		margin-left: 0px
		margin-right: 0px

	.latest-works__head
		+wrapper()
		+row-flex()
		flex-direction: column
		flex-wrap: wrap	
		align-content: center
		margin-left: 0px
		margin-right: 0px

	.latest-works__title
		font-size: 20px
		text-transform: uppercase
		color: #555555
		margin: 0 auto

	.latest-works__line
		margin-top: 29px
		width: 50px
		justify-content: center
		align-items: center
		margin: 0 auto
		img 
			width: 100%
			height: 100%
	
	.latest-works__list	
		+wrapper()
		+row-flex()
		justify-content: center
		color: #555555
		margin-top: 28px

	
	.latest-works__image
		+wrapper()
		+row-flex()
		margin-left: 0px
		margin-right: 0px
		font-family: Montserrat-Medium
		font-weight: 700
		margin-top: 3vmax
		justify-content: center 
		margin-left: 0px
		margin-right: 0px
		width: 100%
</style>
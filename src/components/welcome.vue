<template>
	  <div id="welcome" class="welcome">
	  	  <app-menu 
				v-show="rotate === true"
				@clickMobileLink="clickMobileLink()"
				>		
		  </app-menu>
	      <div class="menu-logo">
	        <div class="hamburger" @click="rotate = !rotate">
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-1': rotate}"></div>
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-2': rotate}"></div>
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-3': rotate}"></div>
	        </div>
	        <div class="logo">
	           Startup
	        </div>
	        <div class="menu">
	          <a href="#" class="menu-link" v-scroll-to="'#welcome'">Home</a>
	          <a href="#" class="menu-link" v-scroll-to="'#container'">Services</a>
	          <a href="#" class="menu-link" v-scroll-to="'#About'">About</a>
	          <a href="#" class="menu-link" v-scroll-to="'#Works'">Works</a>
	          <a href="#" class="menu-link" v-scroll-to="'#Blog'">Blog</a>
	          <a href="#" class="menu-link" v-scroll-to="'#Clients'">Clients</a>
	          <a href="#" class="menu-link" v-scroll-to="'#Contact'">Contact</a>
	        </div>
	      </div>
	      <div class="get-started">
	        <div class="welcome-to">
	          WELCOME TO STARTUP
	        </div>
	        <div class="your-favourite">
	          Your Favourite Creative Agency Template
	        </div>
	        <div class="get-started__button">
	          <a href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" target="_blank" class="get-started__text">GET STARTED</a>
	        </div>
	      </div>
	  </div>
	</div>
</template>

<script>
 	import AppMenu from './mobile-menu';
 	

	export default{
		components: {
		  AppMenu
		},
		data() {
			return {
				rotate: false
			}
		},
		methods: {
			clickMobileLink() {
				this.rotate = false;
			}
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	+reset()
	a
	  color: inherit
	  text-decoration: none 
	.welcome
	  +wrapper()
	  +row-flex()
	  background:  linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('../img/bgc-red.png') no-repeat
	  font-family: Montserrat-Medium
	  font-weight: 700
	  min-height: 770px
	  flex-direction: column
	  align-content: center
	  z-index: 10
	  position: relative 
	  margin-right: 0px
	  margin-left: 0px
	
	.menu-logo
	  +col()
	  +size(9)
	  +size-lg(10)
	  +size-md(11)
	  +size-xs(11)
	  +size-xxs(11)
	  margin-top: 40px
	  display: flex 
	  height: 23px
	  align-items: center
	  justify-content: space-between 
	  +ms(justify-content, inherit)

	.logo 
	  color: #ffffff
	  font-size: 24px
	  display: flex 
	  align-content: center
	  +ms(margin-left, 50px)

	.menu 
	 display: flex
	 font-size: 14px
	 font-weight: 400
	 line-height: 24px
	 color: #ffffff
	 +ms(display, none)
	
	.hamburger
	  display: none
	  justify-content: center
	  flex-direction: column
	  cursor: pointer
	  +ms(display, flex)
	  z-index: 30
	  position: fixed
	
	.hamburger-element
	  transition: 0.2s
	  width: 23px
	  height: 3px 
	  margin: 1px 0px 1px 0px
	  background-color: white
	  border: 1px solid black

	.menu-link
	  display: flex 
	  margin-right: 15px
	  margin-left: 15px
	  cursor: pointer
	  text-decoration: none 
	  color: #ffffff

	.menu-link:hover 
	  color: #a3a3a3

	.get-started 
	  display: flex 
	  flex-direction: column
	  flex-wrap: wrap 
	  align-content: center
	  align-items: center
	  margin-top: 240px
	  color: #ffffff
	  text-align: center

	.welcome-to
	  font-size: 33px

	.your-favourite
	  text-align: center
	  margin-top: 20px
	  font-size: 12px
	  +row-flex()
	  +size-xs(6)

	.get-started__button
	  margin-top: 35px
	  width: 140px
	  height: 35px
	  border: 2px solid #ffffff
	  display: flex 
	  justify-content: center
	  align-content: center
	  flex-wrap: wrap 
	  cursor: pointer


	.get-started__text
	  font-size: 14px
	
	.get-started__button:hover 
	  color: red
	  background-color: white
	  +xs(color, inherit)
	  +xs(background-color, inherit)

	.hamburger-element-rotate-1
	  -webkit-transform: rotate(45deg) translateY(10px)
	   transform: rotate(45deg) translateY(10px)
	   background-color: white
	
	.hamburger-element-rotate-2
		width: 0px
	   	opacity: 0
	   	-webkit-transition: 0.1s
	   	transition: 0.1s
	   	background-color: white
	
	.hamburger-element-rotate-3
		-webkit-transform: rotate(-45deg) translateY(-10px)
		transform: rotate(-45deg) translateY(-10px)
		background-color: white
	
	.hamburger-display 
		display: flex 

	.hamburger-appearance
		left: 0

</style>
<template>
	<transition name="fade" 
				enter-active-class="animated fadeInLeft" 
				leave-active-class="animated fadeOutLeft"
				mode="out-in" 
				appear
				>
		<div class="mobile-menu">
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#welcome'" @click="clickMobileLink()">Home</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#container'" @click="clickMobileLink()">Services</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#About'" @click="clickMobileLink()">About</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#Works'" @click="clickMobileLink()">Works</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#Blog'" @click="clickMobileLink()">Blog</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#Clients'" @click="clickMobileLink()">Clients</a>
			<a href="#" class="menu-link menu-link__modile" v-scroll-to="'#Contact'" @click="clickMobileLink()">Contact</a>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			clickMobileLink() {
				this.$emit('clickMobileLink')
			}
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.mobile-menu
		display: none
		position: fixed
		top: 0px
		left: 0px
		height: 100vmax
		color: white
		font-size: 24px
		background:  linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))
		+wrapper()
		flex-direction: column
		margin: 0 auto
		align-items: center
		+size(4)
		+size-xs(6)
		+size-xxs(7)
		align-content: center
		padding-top: 60px
		+ms(display, flex)
		+xxs(width, 150px)
		flex-wrap: wrap 



	.menu-link__modile
		margin-top: 20px

	


</style>
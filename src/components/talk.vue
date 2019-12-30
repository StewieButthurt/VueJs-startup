<template>
	<div class="talk">
		<div class="talk-text">
			Do you like OUR WORK so far?
		</div>
		<div class="talk-text">
			Let's talk about YOUR PROJECT!
		</div>
		<a class="talk-button" href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg"  target="_blank">
			<span>Get in Touch</span>
		</a>
	</div>
</template>

<script>
	
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.talk	
		min-height: 369px
		+row-flex()
		margin-right: 0px
		margin-left: 0px
		color: white
		margin-bottom: 6.98vmax
		background: url("../assets/img-talk/bgc-table.png") center no-repeat 
		justify-content: center
		align-content: center
		flex-direction: column


	
	.talk-text
		font-size: 30px
		+xs(font-size, 5vw)
	
	.talk-button
		width: 180px
		height: 50px
		display: flex 
		justify-content: center
		flex-wrap: wrap 
		align-content: center
		border-radius: 2px
		border: 2px solid #ffffff
		text-decoration: none 
		color: white
		font-size: 18px
		text-transform: uppercase
		margin-top: 71px
		align-self: center
	
	.talk-button:hover 
		background-color: white
		color: red 
		+xs(background-color, inherit)
		+xs(color, inherit)


	
</style>
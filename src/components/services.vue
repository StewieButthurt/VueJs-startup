<template>
	<div id="container" class="container">
		<div class="services">
			<div class="services__text">
				Services
			</div>
			<div class="services__line">
				<img src="../img/line.png" alt="png-line">
			</div>
			<div class="services__discreption">
				We offer ipsum dolor sit amet, consetetur sadipscing elitr amet
			</div>
		</div>
		<div class="single-services">
			<div class="single-services__element">
				<div class="single-services__icon">
					<img src="../img/icon-A.png" alt="icon-A">
				</div>
				<div class="single-services__text">
					Clean Typography
				</div>
				<div class="single-services__discreption">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
				</div>
			</div>
			<div class="single-services__element">
				<div class="single-services__icon">
					<img src="../img/icon-2.png" alt="icon-2">
				</div>
				<div class="single-services__text">
					Rock Solid Code
				</div>
				<div class="single-services__discreption">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
				</div>
			</div>
			<div class="single-services__element">
				<div class="single-services__icon">
					<img src="../img/icon-3.png" alt="icon-3">
				</div>
				<div class="single-services__text">
					Expert Support
				</div>
				<div class="single-services__discreption">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	

</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.container 
		font-family: Montserrat-Medium
		+wrapper()
		+row-flex()
		justify-content: center
		padding-top: 7vmax
		padding-bottom: 7vmax
		margin-left: 0px
		margin-right: 0px


	.services
		+wrapper()
		+row-flex()
		flex-direction: column
		align-content: center
		min-height: 92px
		justify-content: space-around
		+size(12)
		color: #555555


	.services__text
		font-size: 20px
		font-weight: 400
		text-transform: uppercase
		text-align: center
	
	.services__line
		width: 50px
		justify-content: center
		align-items: center
		margin: 0 auto
		img 
			width: 100%
			height: 100%
	
	.services__discreption
		font-size: 16px
		font-weight: 400
		font-family: 'RobotoSlab-Regular'
		text-align: center

	.single-services
		+row-flex()
		+size-lg(12)
		justify-content: space-between
		color: #555555
		min-height: 217px
		+ms(justify-content, space-around)

	.single-services__element
		+wrapper()
		+row-flex()
		flex-direction: column
		align-content: center
		+size(3)
		min-height: 217px
		align-items: center
		+size-ms(5)
		margin-top: 70px
		+size-xs(12)
	
	.single-services__icon
		display: flex 
		justify-content: center
		width: 90px
		height: 90px
		img
			width: 100%
			height: 100%

	.single-services__text
		font-size: 14px
		font-weight: 400
		margin-top: 29px
		

	.single-services__discreption
		font-size: 14px
		font-weight: 400
		text-align: center 
		margin-top: 24px
</style>
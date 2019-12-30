<template>
	<div id="Clients" class="clients">
		<div class="clients__icon">
			<div class="clients__icon-img">
				<img src="../assets/img-clients/deorham.png">
			</div>
			<div class="clients__icon-img">
				<img src="../assets/img-clients/ratings.png">
			</div>
			<div class="clients__icon-img">
				<img src="../assets/img-clients/malik-media.png">
			</div>
			<div class="clients__icon-img">
				<img src="../assets/img-clients/bcause.png">
			</div>
			<div class="clients__icon-img">
				<img src="../assets/img-clients/womgeiby.png">
			</div>
		</div>
		<div class="clients__descr">
			<div class="clients__descr-title">
				Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum”
			</div>
			<div class="clients__descr-subtitle">
				John Doe, Google Inc.
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.clients 
		+wrapper()
		+row-flex()
		+col()
		min-height: 400px
		padding-bottom: 5vmax
		padding-top: 7vmax
		width: 100% 
		margin-left: 0px
		margin-right: 0px
		padding-right: 0px
		padding-left: 0px
		font-family: 'RobotoSlab-Regular'
		font-style: italic
		justify-content: center
		background-color: #f8f8f8

	.clients__icon
		+size(9)
		display: flex 
		flex-wrap: wrap  
		justify-content: center

	.clients__icon-img
		display: flex 
		margin-left: 15px
		margin-right: 15px
		align-items: center
		height: 50px
	
	.clients__descr
		color: #555555
		+size(8)
		display: flex
		flex-direction: column
		flex-wrap: wrap
		justify-content: space-between
		text-align: center
		font-weight: 400

	.clients__descr-title
		font-size: 18px
		+xs(margin-top, 6vmax)
	.clients__descr-subtitle
		font-size: 20px
		+xs(margin-top, 6vmax)
</style>
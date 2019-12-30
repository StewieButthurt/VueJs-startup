<template>
	<div class="blog-posts-news" @mouseenter="$emit('hoverRedOn', index)" @mouseleave="$emit('hoverRedOff', index)">
		<div class="blog-posts-news__img">
			<img :src="require('../assets/img-blogs/' + img)" alt="png">
		</div>
		<div class="blog-posts-news__descr">
			<div class="blog-posts-news__descr-head">
				<div class="blog-posts-news__descr-head-data">
					<span class="blog-posts-news__descr-head-data-number">{{ data }}</span>
					<span class="blog-posts-news__descr-head-data-month">{{ month }}</span>
				</div>
				<div class="blog-posts-news__descr-head-title">
					<div class="blog-posts-news__descr-head-title-main">
						<span :class="{'blog-posts-news__hover-red' : hoverRed}">{{ title }}</span>
					</div>
					<div class="blog-posts-news__descr-head-title-subtitle">
						By <span :class="{'blog-posts-news__hover-red' : hoverRed}">{{ author }}</span> in <span :class="{'blog-posts-news__hover-red' : hoverRed}">{{ prof }}</span>
					</div>
				</div>
			</div>
			<div class="blog-posts-news__descr-head-descr">
				{{ discrText }}
			</div>
			<div class="blog-posts-news__descr-head-read-more">
				<a href="https://www.meme-arsenal.com/memes/4b6449a3ecddb8e9f21ef9e91661fea7.jpg" target="_blank" class="blog-posts-news__descr-head-read-more" :class="{'blog-posts-news__hover-red' : hoverRed}">Read more</a>
			</div>
		</div>
		<div class="blog-posts-news__border" v-if="massiveLength - 1 !== index">
			
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'title',
			'img',
			'discrText',
			'author',
			'prof',
			'data',
			'month',
			'hoverRed',
			'index',
			'massiveLength'
		]
}
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.blog-posts-news
		+wrapper()
		+row-flex()
		margin-right: 0px
		margin-left: 0px
		margin-top: 3.32vmax
		+size(11)
		justify-content: space-between 
		flex-wrap: wrap 
		+ms(flex-direction, column)
		+ms(align-content, center)
		
	
	.blog-posts-news__img
		+size(5)
		+size-ms(12)
		+ms(display, flex)
		+ms(justify-content, center)
	
	.blog-posts-news__descr	
		+size(7)
		display: flex 
		flex-direction: column 
		+size-ms(12)
		+ms(justify-content, center)
		+ms(margin-top, 30px)


	.blog-posts-news__border
		height: 1px
		background-color: #dddddd
		+size(12)
		margin-top: 38px

	.blog-posts-news__descr-head
		margin-bottom: 23px
		display: flex 

	.blog-posts-news__descr-head-data
		width: 57px
		height: 57px
		border: 2px solid #555555
		display: flex 
		justify-content: center 
		flex-wrap: wrap 
		align-content: center
		font-family: Montserrat-Medium
		font-weight: 700
		flex-direction: column

	.blog-posts-news__descr-head-data-number
		font-size: 18px
		font-weight: 700
		color: #777777
		text-align: center

	.blog-posts-news__descr-head-data-month
		font-size: 14px
		font-weight: 700
		color: #777777
		text-transform: uppercase
		text-align: center

	.blog-posts-news__descr-head-title
		display: flex 
		flex-direction: column 
		margin-left: 26px 
		flex-wrap: wrap 
		justify-content: center

	.blog-posts-news__descr-head-title-main
		font-size: 16px
		color: #555555
		text-transform: uppercase
		margin-bottom: 5px

	.blog-posts-news__descr-head-title-subtitle
		font-size: 13px
		color: #777777
		font-family: Montserrat-Italic

	.blog-posts-news__descr-head-descr
		margin-bottom: 34px
		color: #555555
		font-size: 14px
		font-family: 'RobotoSlab-Light'

	.blog-posts-news__descr-head-read-more
		font-size: 13px
		text-transform: uppercase
		font-weight: 700
		font-family: 'RobotoSlab-Light'
		color: #777777
		cursor: pointer 
		text-decoration: none 
	.blog-posts-news__hover-red
		color: #c13521

</style>
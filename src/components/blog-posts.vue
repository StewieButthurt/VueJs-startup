<template>
	<div id="Blog" class="blog-posts">
		<div class="blog-posts__header">
			<div class="blog-posts__title">
				Recent blog posts
			</div>
			<div class="latest-works__line">
				<img src="../img/line.png" alt="png-line">
			</div>
			<div class="services__discreption">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet
			</div>
		</div>
		<app-blog-posts-news
			v-for="(item, index) in listNewsBlogsResult"
			:key="index"
			:title="item.title"
			:img="item.img"
			:discrText="item.discrText"
			:author="item.author"
			:prof="item.prof"
			:data="item.data"
			:month="item.month"
			:hoverRed="item.hoverRed"
			:index="index"
			@hoverRedOn="hoverRedOn"
			@hoverRedOff="hoverRedOff"
			:massiveLength="listNewsBlogsResult.length"
		></app-blog-posts-news>
		<div class="download-news">
			<transition name="fade" 
						enter-active-class="animated fadeIn" 
						leave-active-class="animated fadeOut"
						mode="out-in" 
						appear
						key="formSuccess__svg-false"
						>
				<div class="formSuccess__svg" v-if="newsError === true">
					<svg width="30px" height="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
					<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
					<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
						"/>
					<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
						"/>
					</svg>
				</div>
			</transition>
			<transition name="fade" 
						enter-active-class="animated fadeIn" 
						leave-active-class="animated fadeOut"
						mode="out-in" 
						appear
						key="formSuccess__text-false"
						>
				<div class="formSuccess__text" v-if="newsError === true">
					Ошибка загрузки новостей!
				</div>
			</transition>
		</div>
		<div class="blog-posts__button" v-if="infoResponse" @click="loadItems()">
			<span>Показать еще</span>
		</div>
	</div>
</template>

<script>
	import AppBlogPostsNews from './blog-posts__news';
	import * as nprogress from 'nprogress';


	import 'nprogress/nprogress.css';

	export default {
		components: {
			AppBlogPostsNews
		},
		data() {
			return {
				listNewsBlogs: [],
				listNewsBlogsResult: [],
				infoResponse: true,
				newsError: false
			}
		},
		computed: {
			formData() {
				return this.listNewsBlogsResult.length
			}
		},
		methods: {
			hoverRedOn(index) {
				this.listNewsBlogsResult[index].hoverRed = true
			},
			hoverRedOff(index) {
				this.listNewsBlogsResult[index].hoverRed = false 
			},
			loadItems() {
				nprogress.start()
				this.$http.post('/', {params: this.formData})
						  .then(response => {
						  	this.newsError = false;
					  		this.listNewsBlogs = [];
					  		this.listNewsBlogs = response.body.blogNewsResult;
					  		for(let i = 0; i < this.listNewsBlogs.length; i++) {
					  			this.listNewsBlogsResult.push(this.listNewsBlogs[i]) 
					  		}
					  		nprogress.done()
						  	if (response.body.blogNewsLength === this.listNewsBlogsResult.length) {
						  		this.infoResponse = false 
						  	}
						  }, response => {
						  	this.newsError = true;
						  	console.log("Error 404");
						  }
			)}
		},
		created() {
			this.loadItems()
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.blog-posts
		+wrapper()
		+row-flex()
		margin-right: 0px
		margin-left: 0px
		flex-direction: column
		align-content: center
		font-family: Montserrat-Medium
		font-weight: 700

	.blog-posts:last-child 


	.blog-posts__header
		display: flex 
		flex-direction: column
		+size(12)
		flex-wrap: wrap 
		align-content: center
		min-height: 92px
		justify-content: space-around 
		margin-bottom: 2.71vmax
		color: #555555
	
	.blog-posts__title
		text-transform: uppercase
		font-size: 20px
		text-align: center

	.blog-posts__button
		margin: 0 auto 
		width: 170px
		height: 40px
		border: 1px solid #a6a6a6 
		display: flex 
		justify-content: center
		flex-wrap: wrap 
		align-content: center
		color: #5c5252
		margin-top: 60px 
		margin-bottom: 20px 
		cursor: pointer
	
	.blog-posts__button:hover 
		color: #c13521
		border: 1px solid #c13521

	.download-news
		margin: 0 auto
		display: flex
		justify-content: center
		flex-wrap: wrap
		align-content: center
		align-items: center

</style>
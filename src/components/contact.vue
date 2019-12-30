<template>
	<div id="Contact" class="container">
		<div class="services">
			<div class="services__text">
				Get in touch
			</div>
			<div class="services__line">
				<img src="../img/line.png" alt="png-line">
			</div>
			<div class="services__discreption">
				We offer ipsum dolor sit amet, consetetur sadipscing elitr amet
			</div>
		</div>
		<div class="contacts-and-input">
			<div class="contacts-descr">
				<div class="contacts-descr__element">
					<div class="contacts-descr__element-icon-and-text">
						<div class="contacts-descr__element-icon">
							<img src="../assets/contacts-icon/fa-map-marker.png">
						</div>
						<div class="contacts-descr__element-text">
							Address
						</div>
					</div>
					<div class="contacts-descr__element-descr">
						312, 7th Ave, New York<br>
						NY 101200, United States of America
					</div>
				</div>
				<div class="contacts-descr__element">
					<div class="contacts-descr__element-icon-and-text">
						<div class="contacts-descr__element-icon">
							<img src="../assets/contacts-icon/fa-mobile-phone.png">
						</div>
						<div class="contacts-descr__element-text">
							Hotline (24x7)
						</div>
					</div>
					<div class="contacts-descr__element-descr">
						+65 0052 300, +65 88251 210<br>
						+88 01723 511 340
						 
					</div>
				</div>
				<div class="contacts-descr__element">
					<div class="contacts-descr__element-icon-and-text">
						<div class="contacts-descr__element-icon">
							<img src="../assets/contacts-icon/fa-envelope-o.png">
						</div>
						<div class="contacts-descr__element-text">
							E-mail
						</div>
					</div>
					<div class="contacts-descr__element-descr">
						shapedtheme@gmail.com<br>
						khalilkode@gmail.com
					</div>
				</div>
			</div>
			<div class="contacts-input">
				<app-input
					v-for="(item, index) in inputInfo"
					:key="index"
					:name="item.title"
					:redBorder="item.redBorder"
					:greenBorder="item.greenBorder"
					@inputValidate="inputValidate($event)"
					:index="index"
					:value="item.value"
				></app-input>
				<textarea 
					class="contacts-input-large-size" 
					placeholder="WRITE YOUR MESSAGE"
					v-model="valueMessage"
				></textarea>
				<div class="container-contacts-button">
					<vue-recaptcha
						ref="recaptcha"
						size="invisible"
						:sitekey="sitekey"
						@verify="register"
						@expired="onCaptchaExpired"
					>
					</vue-recaptcha>
					<button :class="{'button-hover' : buttonAccess}" class="contacts__button" @click="validate()"  >
						<span class="contacts__button-text">
							Send message
						</span>
					</button>
					<div class="formSuccess">
						<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__svg"
									>
							<div class="formSuccess__svg" v-if="sendFormAccess === true">
								<svg width="30px" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">
								<path style="fill:#6AC259;" d="M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333
									c117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622
									l140.894-140.898l31.309,31.309L174.199,322.918z"/>
								</svg>
							</div>
						</transition>
						<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__text"
									>
							<div class="formSuccess__text" v-if="sendFormAccess === true">
								Успешно!
							</div>
						</transition>
						<transition name="fade" 
									enter-active-class="animated fadeIn" 
									leave-active-class="animated fadeOut"
									mode="out-in" 
									appear
									key="formSuccess__svg-false"
									>
							<div class="formSuccess__svg" v-if="sendFormAccess === false">
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
							<div class="formSuccess__text" v-if="sendFormAccess === false">
								Ошибка отправки формы! Попробуйте снова!
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppInput from './input';
	import * as nprogress from 'nprogress';
	import VueRecaptcha from 'vue-recaptcha';


	import 'nprogress/nprogress.css';

	export default {
		data() {
			return {
				inputInfo: [
					{
						title: 'YOUR NAME',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					},
					{
						title: 'YOUR E-MAIL',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					},
					{
						title: 'YOUR SUBJECT',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					},
					{
						title: 'COMPANY NAME',
						redBorder: false,
						greenBorder: false,
						value: '',
						counterButton: 0
					}
				],
				redBorderMessage: false,
				greenBorderMessage: false,
				valueMessage: '',
				buttonAccess: false,
				counter: 0,
				sendFormAccess: null,
				sitekey: '6Le8kbIUAAAAACBjXugPMkKduI3E9uT7Jf0q6MmQ'
			}
			
		},
		components: {
			AppInput,
			VueRecaptcha
		},
		methods: {
			inputValidate(event) {
				if(event.resultValidate === true) {
					this.inputInfo[event.indexElement].redBorder = false;
					this.inputInfo[event.indexElement].greenBorder = true;
					this.inputInfo[event.indexElement].value = event.inputText;
					this.inputInfo[event.indexElement].counterButton = 1;
					this.disabledButton()
				} else if (event.resultValidate === false) {
					this.inputInfo[event.indexElement].greenBorder = false;
					this.inputInfo[event.indexElement].redBorder = true;
					this.inputInfo[event.indexElement].counterButton = 0;
					this.disabledButton()
				} 
			},
			disabledButton() {
				let counter = 0;
				this.inputInfo.forEach(function callback(currentValue, index, array) {
				   if(currentValue.counterButton === 1) {
				   	counter++
				   }
				})
				this.counter = counter;
				if( this.inputInfo.length === this.counter){
				    this.buttonAccess = true
				} else {
					this.buttonAccess = false 
				}
			},
			register(recaptchaToken) {
				nprogress.start()
				this.$http.post('/form', 
				{
					inputMain: this.inputInfo,
					inputMessage: this.valueMessage,
					recaptchaToken: recaptchaToken
				})
				.then(response => {
					if (response.body.message === true) {
						this.sendFormAccess = true
						nprogress.done()
					} else {
						this.sendFormAccess = false
					}
				}, response => {
						console.log("Error 404")
						this.sendFormAccess = false
				})
			},
			validate() {
				if( this.buttonAccess === true) {
						this.$refs.recaptcha.execute()
				}
			},
			onCaptchaExpired() {
			     this.$refs.recaptcha.reset()
			}
		},
		created() {
			nprogress.set(0.0);   
			nprogress.set(0.4);
			nprogress.set(1.0);
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";
	
	.contacts-and-input
		+size(11)
		display: flex 
		justify-content: space-between	
		margin-top: 3vmax
		flex-wrap: wrap 
		+sm(flex-direction, column)
		+sm(align-content, center)

	.contacts-descr
		width: 233px
		display: flex 
		flex-direction: column
		margin: 0 auto 

	.contacts-descr__element
		display: flex 
		flex-direction: column
		margin-top: 17px	
		margin-bottom: 17px

	.contacts-descr__element-icon-and-text
		display: flex
		color: #555555
		font-family: 'Montserrat-Semibold'

	.contacts-descr__element-icon 
		margin-right: 14px
	
	.contacts-descr__element-text
		text-transform: uppercase
		font-size: 14px
	
	.contacts-descr__element-descr
		font-family: 'RobotoSlab-Regular'
		color: #555555
		font-size: 12px
		font-weight: 500
		margin-left: 27px

	.contacts-input
		+wrapper()
		+row-flex()
		+size(8)
		flex-wrap: wrap
		justify-content: space-around
		min-height: 278px
		+sm(margin-top, 4vmax)
		+size-sm(12)
		padding-left: 0px
		padding-right: 0px
		+size-md(12)
		margin-top: 2vmax
		+xs(flex-direction, column)
		+xs(justify-content, space-around)
		+xs(min-height, 440px)
	
	.contacts-input-large-size
		+size(11)
		height: 104px
		padding-left: 17px
		resize: none
		+size-xs(12)
		border: 1px solid #555555


	textarea.contacts-input-large-size::-webkit-input-placeholder 
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'

	
	textarea.contacts-input-large-size:-ms-input-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'
	
	textarea.contacts-input-large-size::-ms-input-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'
	
	textarea.contacts-input-large-size::-moz-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'

	textarea.contacts-input-large-size::placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'

	input,textarea 
		outline: none

	.contacts__button
		background-color: white
		border: 1px solid #555555
		width: 170px
		height: 44px
		color: #555555

	.contacts__button-text
		text-transform: uppercase
		font-size: 12px
		font-family: 'RobotoSlab-Regular'

	.container-contacts-button
		width: 92.7%
		display: flex
		flex-wrap: wrap 
		align-content: center

	 .button-hover
	 	background-color: #c0301c
	 	border: none
	 	width: 170px
	 	height: 44px
	 	color: white
	 	cursor: pointer 
	 	transition-duration: 0.2s
	 
	 .button-hover:hover 
	 	transition-duration: 0.2s
	 	transform: scale(0.9)

	.formSuccess
		height: 44px
		display: flex
		align-items: center
		margin-left: 15px
		+xs(margin-top, 15px)
		+xs(margin-left, 0px)

	.formSuccess__text
		font-size: 14px
		margin-left: 15px

	button
		outline: none 

	.grecaptcha-badge
		z-index: 999999
</style>

<template>
	<input  
		class="contacts-input-enter" 
		type="text" 
		:placeholder="name"
		:class="{'inputRedBorder' : redBorder, 'inputGreenBorder' : greenBorder}"
		v-model="text"
		@input="onInput"
		>
</template>

<script>
	import isEmail from 'validator/lib/isEmail';
	import isAlpha from 'validator/lib/isAlpha';
	import isEmpty from 'validator/lib/isEmpty';

	export default {
		data() {
			return {
				text: ''
			}
		},
		props: [
			'name',
			'redBorder',
			'index',
			'greenBorder',
			'value'
		],
		methods: {
			onInput() {
				if( this.name === 'YOUR NAME') {
					let validateName = isAlpha(this.text);
					this.inputEmit(validateName);
				} else if (this.name === 'YOUR E-MAIL') {
					let validateName = isEmail(this.text);
					this.inputEmit(validateName);
				} else if (this.name === 'YOUR SUBJECT' || 'COMPANY NAME') {
					let validateName = !(isEmpty(this.text));
					this.inputEmit(validateName);
				}
			},
			inputEmit(validateName) {
				this.$emit('inputValidate', 
					{
						indexElement: this.index,
						resultValidate: validateName,
						inputText: this.text
					})
			}
		}
	}
</script>

<style lang="sass">
	@import "../smart-grid.sass";

	.contacts-input-enter
		+size(5)
		height: 44px
		padding-left: 17px
		+size-xs(12)
		border: 1px solid #555555

	input::-webkit-input-placeholder 
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'
	
	input:-ms-input-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'
	
	input::-ms-input-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'
	
	input::-moz-placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'

	input::placeholder
		font-size: 12px
		color: #555555
		font-family: 'RobotoSlab-Regular'

	.inputRedBorder
		border: 1px solid #c0301c

	.inputGreenBorder
		border: 1px solid green
		
	
</style>
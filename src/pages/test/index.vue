<template>
	<div class="content">
		<van-button type="primary">按钮</van-button>
		<img  class="logo" src="/static/logo.png" alt="">
		<div>
			<span class="title">{{title}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'test'
			}
		},
		onLoad(option) { //此页面加载时将执行我   //option为object类型，会序列化上个页面传递的参数
			console.log(18, option)
			console.log(20, wx)
			console.log('onLoad')
		},
		onShow() { //此页面显示时将执行我
			console.log('onShow')
		},
		onReady() { //此页面初次在屏幕上渲染完成之后会执行我

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		text-align: center;
		height: 400px;
		.logo {
			height: 200px;
			width: 200px;
			margin-top: 200px;
		}
	}

	.title {
		font-size: 36px;
		color: $stable;
	}
</style>

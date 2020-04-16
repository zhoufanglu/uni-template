<template>
	<div class="content">
		<headComponent
				title="首页"
				isReturn="true"
		></headComponent>

		<h1>我是首页</h1>
		<div>
			<span class="title">{{title}}</span>
			<div @click="go">go test page</div>

		</div>
		<footComponent></footComponent>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad(option) { //此页面加载时将执行我   //option为object类型，会序列化上个页面传递的参数
			console.log(18, option)
			console.log('onLoad')
		},
		onShow() { //此页面显示时将执行我
			console.log('onShow')
		},
		onReady() { //此页面初次在屏幕上渲染完成之后会执行我

		},
		methods: {
			go(){
				console.log('xxx')
				uni.redirectTo({
					url: '/pages/test/index?id=1&name=lfz'
				})
			}
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

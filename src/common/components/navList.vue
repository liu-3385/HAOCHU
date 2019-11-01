<template>
	<ul class="nav">
		<router-link tag="li" to="/home"><i class="iconfont icon-fangzi"></i>首页</router-link>
		<router-link tag="li" to="/menu"><i class="iconfont icon-chushimao"></i>菜谱</router-link>
		<router-link tag="li" to="/food"><i class="iconfont icon-yu"></i>食材</router-link>
		<router-link tag="li" to="/says"><i class="iconfont icon-xingxing"></i>厨语</router-link>
		<router-link tag="li" to="/videos"><i class="iconfont icon-shipin"></i>视频</router-link>
	</ul>
</template>

<script>
</script>

<style scoped>
	.nav{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 99;
		background: white;
		/* padding-top: 50px; */
		box-sizing: border-box;

	}
	.nav li i{font-size: 22px;}
	.nav li{
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.router-link-active{color:#e9232c;}
</style>

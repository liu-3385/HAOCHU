import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/home.vue"
import menu from "../components/menu/menu.vue"
import food from "../components/food/food.vue"
import says from "../components/say/say.vue"
import videos from "../components/video/video.vue"

import jiankang from "../components/say/compontents/table/jiankang.vue";
import baike from "../components/say/compontents/table/baike.vue";
import ketang from "../components/say/compontents/table/ketang.vue";

import yuhan from "../components/say/compontents/table/yuhan.vue";
import haishen from "../components/say/compontents/table/haishen.vue";
import yanhuo from "../components/say/compontents/table/yanhuo.vue";

Vue.use(VueRouter);

var routes=[
	{
		path:"/",
		redirect:home
	},
	{
		path:"/home",
		component:home
	},
	{
		path:"/menu",
		component:menu
	},
	{
		path:"/yuhan",
		component:yuhan
	},
	{
		path:"/haishen",
		component:haishen
	},
	{
		path:"/yanhuo",
		component:yanhuo
	},
	{
		path:"/food",
		component:food
	},
	{
		path:"/says",
		component:says,
		redirect:"/says/jiankang",
		children:[
			{
				path:"jiankang",
				component:jiankang,
			},
			{
				path:"baike",
				component:baike
			},
			{
				path:"ketang",
				component:ketang
			},
			
		]
		
	},
	{
		path:"/videos",
		component:videos
	},
	{
		path:"*",
		redirect:home
	},
	
]

var router=new VueRouter({
	routes
})

export default router;
const home =  resolve => require(['../../view/home.vue'], resolve);

export const routes = [

	{ path: '/', component: home },
	{ path: '/home', component: home }
]
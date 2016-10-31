import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import {routes} from './assets/js/routes'

Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
   	mode: 'history',	
   	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
   routes // （缩写）相当于 routes: routes
})

// 通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

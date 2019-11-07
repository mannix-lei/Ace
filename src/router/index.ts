import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue');
const User = () => import(/* webpackChunkName: "User" */ '../views/user/User.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/user',
		name: 'name',
		component: User,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

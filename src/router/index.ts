import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue');
const User = () => import(/* webpackChunkName: "User" */ '../views/user/User.vue');
const Paper = () => import(/* webpackChunkName: "Paper" */ '../views/pager/Paper.vue');
const AddUser = () => import(/* webpackChunkName: "User" */ '../views/user/component/AddUser.vue');
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
		name: 'user',
		component: User,
	},
	{
		path: '/add',
		name: 'addUser',
		component: AddUser,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/paper',
		name: 'paper',
		component: Paper,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

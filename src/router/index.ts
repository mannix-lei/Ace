import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue');
const User = () => import(/* webpackChunkName: "User" */ '../views/user/User.vue');
const Doc = () => import(/* webpackChunkName: "Doc" */ '../views/doc/Doc.vue');
const AddUser = () => import(/* webpackChunkName: "User" */ '../views/user/component/AddUser.vue');
const Pages = () => import(/* webpackChunkName: "Pages" */ '../views/pages/Pages.vue');

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
		path: '/pages',
		name: 'pages',
		component: Pages,
	},
	{
		path: '/doc',
		name: 'doc',
		component: Doc,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

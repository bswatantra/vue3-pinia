import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Home from '@/views/HomeView.vue';
import Login from '@/views/auth/Login.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Register from '@/views/auth/Register.vue';

const router = createRouter( {
	history: createWebHistory( import.meta.env.BASE_URL ),
	routes: [
		{
			path: "/",
			component: MainLayout,
			meta: { requiresAuth: true },
			children: [
				{
					path: "/",
					name: "home",
					component: Home
				},
				{
					path: "about",
					name: "about",
					component: () => import( '@/views/AboutView.vue' )
				},
			],
		},

		{
			path: "/auth",
			component: MainLayout,
			meta: { isGuest: true },
			children: [
				{
					path: "login",
					name: "login",
					component: Login
				},
				{
					path: "register",
					name: "register",
					component: Register
				},
			],
		},
	]
} );

router.beforeEach( ( to, from, next ) => {
	const authStore = useAuthStore();
	if ( to.matched.some( record => record.meta.requiresAuth ) )
	{
		if ( !authStore.token )
		{
			next( { name: 'login' } );
		} else
		{
			next();
		}
	} else if ( authStore.token && to.meta.isGuest )
	{
		next( { name: "home" } );
	} else
	{
		next();
	}
} );


export default router;

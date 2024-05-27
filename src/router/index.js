import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomeView.vue';
import UsersPage from '../pages/UsersView.vue';
import LoginPage from '../pages/LoginView.vue';
import ProfilePage from '../pages/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.ROOT_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/users',
      component: UsersPage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/profile',
      component: ProfilePage,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('token') !== null; // Simplify authentication check

  if (to.meta.requiresAuth && !isAuth) {
    next('/login');
  } else {
    next();
  }
});

export default router;

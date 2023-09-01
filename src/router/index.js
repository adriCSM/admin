import { createRouter, createWebHistory } from 'vue-router';
// import { useStore } from 'vuex';
import LoginView from '../views/LoginView.vue';
import routesDocumentation from './documentation.routes.js';
import routesUsers from './users.routes.js';
import routesPortofolio from './portfolio.routes.js';
import { useStore } from 'vuex';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },

  {
    path: '/donation',
    name: 'Donation',
    component: () => import('../views/DonationView.vue'),
  },

  {
    path: '/donation/success',
    name: 'Donation Success',
    component: () => import('../views/DonationSuccess.vue'),
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/auth/register',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/auth/password',
    name: 'Password',
    component: () => import('../views/ForgetPasswordView.vue'),
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
  },

  {
    path: '/store/products',
    name: 'Products',
    component: () => import('../views/store/PrductView.vue'),
  },
  {
    path: '/store/products/:id',
    name: 'Edit Product',
    component: () => import('../views/store/EditProductView.vue'),
  },

  {
    path: '/store/orders',
    name: 'Order',
    component: () => import('../views/store/OrderView.vue'),
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/store/OrderView.vue'),
  },

  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/store/OrderView.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('../views/PrivacyPolice.vue'),
  },
  {
    path: '/qr-code-generator',
    name: 'QrCodeGenerator',
    component: () => import('../views/QrCodeGenerator.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('../views/NotfoundView.vue'),
  },
];
routesDocumentation.map((route) => {
  routes.push(route);
});
routesUsers.map((route) => {
  routes.push(route);
});
routesPortofolio.map((route) => {
  routes.push(route);
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    to;
    from;
    savedPosition;

    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (
    to.name !== 'Home' &&
    to.name !== 'Donation Success' &&
    to.name !== 'Login' &&
    to.name !== 'Documentation' &&
    to.name !== 'Donation' &&
    to.name !== 'Auth_Post' &&
    to.name !== 'Notfound'
  ) {
    localStorage.removeItem('user');
  } else if (to.name) {
    next();
  } else {
    next({ name: 'Notfound' });
  }
});

export default router;

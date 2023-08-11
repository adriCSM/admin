import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('../views/DocsView.vue'),
  },

  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView,
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
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserView.vue'),
  },
  {
    path: '/users/:id',
    name: 'User Profile',
    component: () => import('../views/UserProfileview.vue'),
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue'),
  },

  {
    path: '/portofolio/cvs',
    name: 'Curiculum Vitae',
    component: () => import('../views/portofolio/CvView.vue'),
  },
  {
    path: '/portofolio/cv/:id',
    name: 'Edit CV',
    component: () => import('../views/portofolio/EditCv.vue'),
  },
  {
    path: '/portofolio/projects',
    name: 'Projects',
    component: () => import('../views/portofolio/ProjectsView.vue'),
  },
  {
    path: '/portofolio/messages',
    name: 'Messages',
    component: () => import('../views/portofolio/ContactView.vue'),
  },
  {
    path: '/portofolio/certificates',
    name: 'Certificates',
    component: () => import('../views/portofolio/CertificatesView.vue'),
  },
  {
    path: '/portofolio/certificates/edit/:id',
    name: 'Edit Certificate',
    component: () => import('../views/portofolio/EditCertificateView.vue'),
  },
  {
    path: '/portofolio/projects/edit/:id',
    name: 'Edit Project',
    component: () => import('../views/portofolio/EditProjectView.vue'),
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
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('../views/NotfoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.name !== 'Home' && to.name !== 'Notfound' && !store.state.auth.loggedIn) {
    next();
  } else if (to.name) {
    document.title = `AM || ${to.name}`;
    next();
  } else {
    next({ name: 'Notfound' });
  }
});

export default router;

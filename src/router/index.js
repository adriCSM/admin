import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'redirect',
    redirect: '/auth/login',
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
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },

  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserView.vue'),
  },

  {
    path: '/portofolio/cvs',
    name: 'Curiculum Vitae',
    component: () => import('../views/CvView.vue'),
  },
  {
    path: '/portofolio/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/portofolio/certificates',
    name: 'Certificates',
    component: () => import('../views/CertificatesView.vue'),
  },
  {
    path: '/portofolio/certificates/edit/:id',
    name: 'Edit Certificate',
    component: () => import('../views/EditCertificateView.vue'),
  },
  {
    path: '/portofolio/projects/edit/:id',
    name: 'Edit Project',
    component: () => import('../views/EditProjectView.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/StoreView.vue'),
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
  if (to.name) {
    document.title = ` ${to.name} || Store`;
    next();
  } else {
    next({ name: 'Notfound' });
  }
});

export default router;

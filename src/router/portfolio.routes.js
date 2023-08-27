const routesPortofolio = [
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
];

export default routesPortofolio;

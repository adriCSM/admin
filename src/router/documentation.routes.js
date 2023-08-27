const routesDocumentation = [
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('../views/DocsView.vue'),
    children: [
      {
        path: 'auth-post',
        name: 'AuthPost',
        component: () => import('@/components/layout/sectionDocumentation/AuthPost.vue'),
      },
      {
        path: 'auth-put',
        name: 'AuthPut',
        component: () => import('@/components/layout/sectionDocumentation/AuthPut.vue'),
      },
      {
        path: 'auth-delete',
        name: 'AuthDelete',
        component: () => import('@/components/layout/sectionDocumentation/AuthDelete.vue'),
      },
      {
        path: 'user-post',
        name: 'UserPost',
        component: () => import('@/components/layout/sectionDocumentation/UserPost.vue'),
      },
      {
        path: 'user-put',
        name: 'UserPut',
        component: () => import('@/components/layout/sectionDocumentation/UserPut.vue'),
      },
      {
        path: 'users-get',
        name: 'UsersGet',
        component: () => import('@/components/layout/sectionDocumentation/UsersGet.vue'),
      },
      {
        path: 'user-delete',
        name: 'UserDelete',
        component: () => import('@/components/layout/sectionDocumentation/UserDelete.vue'),
      },
    ],
  },
];
export default routesDocumentation;

const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => handler.postAdminHandler(request, h),
  },
  {
    method: 'POST',
    path: '/users',
    handler: (request, h) => handler.postUserHandler(request, h),
  },
  {
    method: 'POST',
    path: '/users/collaborator',
    handler: (request, h) => handler.postUserCollaboratorHandler(request, h),
  },
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => handler.getUsersHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (request, h) => handler.getUserByIdHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

module.exports = routes;
